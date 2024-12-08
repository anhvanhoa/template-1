import { z } from 'zod';

export const schemaChangePassword = z
    .object({
        password: z.string({}).min(1, {
            message: 'Mật khẩu cũ không được để trống'
        }),
        newPassword: z.string().min(6, {
            message: 'Mật khẩu mới phải lớn hơn 6 ký tự'
        }),
        confirmPassword: z.string().min(6, {
            message: 'Mật khẩu xác nhận phải lớn hơn 6 ký tự'
        })
    })
    .superRefine((data, ctx) => {
        if (data.newPassword !== data.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Mật khẩu xác nhận không khớp',
                path: ['confirmPassword']
            });
        }
    });

export type SchemaChangePassword = z.infer<typeof schemaChangePassword>;

export const schemaUserInfo = z.object({
    fullName: z.string().min(1, {
        message: 'Họ và tên không được để trống'
    }),
    email: z.string().email({
        message: 'Email không hợp lệ'
    }),
    phoneNumber: z.string().regex(/^\d{10,11}$/, {
        message: 'Số điện thoại phải có 10-11 chữ số'
    }),
    gender: z.enum(['male', 'female', 'other'], {
        message: 'Giới tính không hợp lệ'
    }),
    birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'Ngày sinh không hợp lệ'
    })
});

export type SchemaUserInfo = z.infer<typeof schemaUserInfo>;
