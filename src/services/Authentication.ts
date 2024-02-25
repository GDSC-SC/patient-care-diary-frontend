export class Authentication {
    isLoggedIn() {
        const token = localStorage.getItem('accessToken');
        return token !== '' && token !== null;
    }

    login() {
       window.location.href="http://patient-care-diary.dev/oauth2/authorization/google"
       const token = new URL(window.location.href).searchParams.get("accessToken");
       const refreshToken = new URL(window.location.href).searchParams.get("refreshToken");
       localStorage.setItem('accessToken', token || '');
       localStorage.setItem('refreshToken', refreshToken || '');
    }
}