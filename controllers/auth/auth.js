import { User } from "../../models/User.js"
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const controller = {
    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = false
        req.body.verify_code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)

            const message = {
              from: process.env.SMTP_USER,
              to: req.body.mail,
              subject: "Verifica tu cuenta",
              text: `Por favor, haz clic en el siguiente enlace para verificar tu cuenta: http://localhost:8080/api/auth/verify/${req.body.verify_code}`,
            };
            transporter.sendMail(message, (error, info) => {
              if (error) {
                console.log(error);
              } else {
                console.log(
                  "Correo electrónico de verificación enviado: " + info.response
                );
              }
            });

            return res.status(200).json({
                success: true,
                message: 'User registered',
                data: req.body
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { mail: req.user.mail },
                { is_online: true },
                { new: true }
            )
            
            user.password = null

            const token = jwt.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60*60*24 }
            )
            return res.status(200).json({
                succes: true,
                message: 'User logged in',
                user,
                token
            })
        } catch (err) {
            next(err)
        }
    },

    sign_out: async (req, res, next) => {
        const { mail } = req.user
        const { user } = req
        try {
            await User.findOneAndUpdate(
                { mail },
                { is_online: false },
                { new: true }
            )
            user.password = null
            return res.status(200).json({
                success: true,
                message: 'offline user!',
            })
        } catch (err) {
            next(err)
        }
    },

    token: async (req, res, next) => {
        const { user } = req

        user.password = null
        
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: 60*60*24 }
        )

        try {
        return res.status(200).json({
            success: true,
            message: 'User logged in',
            user,
            token
        })
        } catch (error) {
        next(error)
        }
    }
       
}

export default controller