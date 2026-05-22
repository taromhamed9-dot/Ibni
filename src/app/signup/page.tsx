import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import {
  Checkbox,
  Divider,
  PasswordField,
  SocialButton,
  TextField,
} from "@/components/auth/auth-inputs";
import { Icon } from "@/components/icons";

export const metadata = { title: "إنشاء حساب" };

export default function SignupPage() {
  return (
    <AuthShell
      side="signup"
      eyebrow="إنشاء حساب"
      title={<>أنشئ حساب <span className="gradient-text-warm">العائلة</span> في دقيقة.</>}
      description="١٤ يوماً تجربة مجانية. بدون بطاقة بنكية. يمكنك إضافة أطفالك بعد التسجيل."
      footer={
        <>
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="font-bold" style={{ color: "var(--orange)" }}>
            تسجيل الدخول
          </Link>
        </>
      }
    >
      <div className="flex gap-3">
        <SocialButton provider="google" label="إنشاء عبر Google" />
        <SocialButton provider="apple" label="إنشاء عبر Apple" />
      </div>

      <Divider>أو سجّل بالبريد</Divider>

      <form className="space-y-4" action="#" method="post">
        <TextField
          label="اسم ولي الأمر"
          icon={<Icon.User size={18} />}
          autoComplete="name"
          placeholder="مثال: محمد بن علي"
          required
        />

        <TextField
          label="البريد الإلكتروني"
          icon={<Icon.At size={18} />}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="parent@example.com"
          required
          dir="ltr"
        />

        <PasswordField
          label="كلمة السر"
          autoComplete="new-password"
          placeholder="٨ حروف على الأقل"
          hint="على الأقل ٨ حروف، وحرف كبير، ورقم."
        />

        <Checkbox
          label={
            <>
              أوافق على{" "}
              <Link href="/terms" className="font-bold underline" style={{ color: "var(--orange)" }}>
                شروط الاستخدام
              </Link>{" "}
              و{" "}
              <Link href="/privacy" className="font-bold underline" style={{ color: "var(--orange)" }}>
                سياسة الخصوصية
              </Link>
              .
            </>
          }
          defaultChecked
        />

        <button type="submit" className="btn-primary mt-2 w-full justify-center">
          <Icon.Rocket size={18} />
          ابدأ التجربة المجانية
        </button>
      </form>

      <div
        className="mt-6 grid gap-2 rounded-2xl p-4"
        style={{ background: "var(--orange-light)", border: "1px solid color-mix(in srgb, var(--orange) 25%, transparent)" }}
      >
        <p className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text)" }}>
          <Icon.Sparkles size={14} />
          ماذا تحصل في الـ ١٤ يوم؟
        </p>
        <ul className="grid gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
          <li className="flex items-center gap-2"><Icon.CheckCircle size={14} /> وصول كامل لكل التطبيقات والقصص</li>
          <li className="flex items-center gap-2"><Icon.CheckCircle size={14} /> مساعد إبني الذكي بالكامل</li>
          <li className="flex items-center gap-2"><Icon.CheckCircle size={14} /> تقارير أسبوعية لولي الأمر</li>
        </ul>
      </div>
    </AuthShell>
  );
}
