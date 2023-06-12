// @ts-ignore
import { mapActions, mapState } from "vuex";
import userService from "../../shared/services/userService";

const homeComponent: any = {
    name: 'HomePage',
    computed: {
        ...mapState('myReducer', {
            myresult: (state: any) => state.result
        })
    },
    methods: {
        show(){
            if (this.myresult != "null"){
                userService.listAll().then(
                    it => {
                        console.log(it)
                    }
                )
            }
        }
    }
}

export default homeComponent;