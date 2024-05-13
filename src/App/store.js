import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userDetailSlice";

 const store = configureStore({
    reducer : {
        app : userDetail,
    }
})

export default store







    // ===>>> basic confuration for store
        // import { configureStore } from "@reduxjs/toolkit";

        // export const store = configureStore({
        //     reducer: {
                // ==>> add all reducers for impliment
        //     }
        // })
