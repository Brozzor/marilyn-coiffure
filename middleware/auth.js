export default function ({ store, redirect }) {
    // If the user is not authenticated
    let token = localStorage.getItem('tokenSession')
    console.log(token)
    if (!token) {
        return redirect('/admin')
    }


}