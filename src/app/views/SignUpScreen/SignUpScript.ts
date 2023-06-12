// @ts-ignore
import { mapActions, mapState } from "vuex";

import authService from "../../shared/services/authService";
import { Auth } from "../../shared/model/Auth";
import { User } from "../../shared/model/User";
import userService from "../../shared/services/userService";

const signUpComponent: any = {
    name: 'SignUpPage',
    data(){
        return {
            username: "example",
            email: "example@gmail.com",
            password: "12345678",
            error: { enabled: true, errors: [] }
        }
    },
    methods: {
        ...mapActions('myReducer', ['setResult']),
        singUp () {
            const auth: Auth = new Auth(this.email, this.username, this.password)
            authService.authInsert(auth).then(
                it => {
                    const user: User = new User(it.username, "2020-03-01")
                    user.auth = it.id
                    console.log(User.simpleRefract(user));
                    userService.insert(user).then(
                        (result: any) => {
                            console.log(result)
                            this.$router.push('/signIn');
                        }
                    ).catch((msg) => {
                        console.log("Error: " + msg);
                        this.$router.push('/error');
                    })
                }
            ).catch((error) => {
                this.error.enabled = false
                console.log(error)
                // this.error.errors = error
            })
        }
    }
}

export default signUpComponent