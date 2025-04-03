const base = '/auth'
export const authEndpoints  = {
   login : `${base}/login`,
   register : `${base}/register`,
   registerAgency : `${base}/register-agency`,
   registerContentCreator : `${base}/register-content-creator`,
   forgotPassword : `${base}/forgot-password`,
   resetPassword : `${base}/reset-password`,
   verifyEmail : `${base}/verify-email`,
   resendVerificationEmail : `${base}/resend-verification-email`,
   refresh : `${base}/refresh-token`,
   logout : `${base}/logout`,
};
