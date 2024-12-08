import { z } from 'zod';
export const schemaLogin = z.object({
    email: z.string().email({
        message: 'Email không đúng định dạng'
    }),
    password: z.string()
});

export type SchemaLogin = z.infer<typeof schemaLogin>;

const regexPhoneNumber = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
export const schemaRegister = z.object({
    email: z.string().email({
        message: 'Email không đúng định dạng'
    }),
    password: z.string().min(6, {
        message: 'Mật khẩu phải lớn hơn 6 ký tự'
    }),
    phone: z.string().regex(regexPhoneNumber, {
        message: 'Số điện thoại không hợp lệ'
    }),
    fullName: z.string().min(6, {
        message: 'Họ & Tên không được duới 6 ký tự'
    })
});

export type SchemaRegister = z.infer<typeof schemaRegister>;

export const schemaForgotPassword = z.object({
    email: z.string().email({
        message: 'Email không đúng định dạng'
    })
});

export type SchemaForgotPassword = z.infer<typeof schemaForgotPassword>;
