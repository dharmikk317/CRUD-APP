import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ======>>>>>>  create user action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch("https://663c703517145c4d8c363839.mockapi.io/crud", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const result = await response.json()
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }

})

//new showUser function 
// ======>>>>>> read action
// =========>>>>>>>> showuser data
export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("https://663c703517145c4d8c363839.mockapi.io/crud");
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// ======>>>>>> delete action
// =====>>>>>> deleteuser data 
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {

    try {
        const response = await fetch(`https://663c703517145c4d8c363839.mockapi.io/crud/${id}`,
            {
                method: "DELETE"
            });
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Update action
export const UpdateUser = createAsyncThunk("UpdateUser", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://663c703517145c4d8c363839.mockapi.io/crud/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const result = await response.json()
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }

})



// New extraReducers for use .addCase
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        serachData : []
    },
    reducers: {
        serachUser(state, action){
            state.serachData = action.payload
        }

    },

    extraReducers: (builder) => {
        builder
        // create user
            .addCase(createUser.pending, (state) => {
                state.loading = true; // Modify loading directly
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // for show
            .addCase(showUser.pending, (state) => {
                state.loading = true; // Modify loading directly
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // for delete
            .addCase(deleteUser.pending, (state) => {
                state.loading = true; // Modify loading directly
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;

                const { id } = action.payload;

                if (id) {
                    state.users = state.users.filter((ele) => ele.id !== id)
                }

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // UpdateUser
            .addCase(UpdateUser.pending, (state) => {
                state.loading = true; // Modify loading directly
            })
            .addCase(UpdateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele) => (
                    ele.id === action.payload.id ? action.payload : ele
                ))
            })
            .addCase(UpdateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});



export default userDetail.reducer;
// export const { serachUser } = userDetail.actions
export const { serachUser } = userDetail.actions

// ===>>> basic for all time this imliment in a crateSlice

// import { createSlice } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//   },
// })
// Will handle the action type `'counter/increment'`

