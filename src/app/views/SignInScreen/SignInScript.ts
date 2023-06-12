// @ts-ignore
import { mapActions, mapState } from "vuex";
import authService from "../../shared/services/authService";
import userService from "../../shared/services/userService";
import { Auth } from "../../shared/model/Auth";

const signInComponent: any = {
    name: 'SignInPage',
    data(){
        return {
            username: "example",
            email: undefined,
            password: "12345678",
            error: { enabled: true, errors: [] }
        }
    },
    methods: {
        ...mapActions('myReducer', ['setResult']),
        authenticate () {
            const auth: Auth = new Auth(this.email, this.username, this.password)
            authService.authentication(auth).then(
                () => {
                    userService.getAuthenticatedUser().then(
                        (it: any) => {
                            console.log(it)
                            this.setResult({ value: it.nickname })
                            this.$router.push('/');
                        }
                    ).catch(() => {
                        this.$router.push('/error');
                    })
                }
            ).catch((msg: any) => {
                this.error.enabled = false
                console.log(msg)
                // if (msg.status == 400){
                //   this.error.errors = msg.error
                // }
                // else if (msg.status == 404){
                //   this.error.errors = [msg.error]
                // }
            })
        }
    }
}

export default signInComponent