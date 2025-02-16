import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
//createAsyncThunk




//{type:"Coin/fetch",payload:}
//fetchData(20) => args=20


//{type:'coin/fetch/pending',payload:undefined}
//{type:'coin/fetch/fullfilled',payload:data}
//{type:'coin/fetch/rejected, payload:"errormessage"}

const fetchData=createAsyncThunk(
    //Action: type : payload
    'Coin/fetch',
    async(args,thunkAPI)=>{
        try{
            const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data= await response.json();
            return data; //yeh payload k andrr jaataa h
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)

const slicer1 = createSlice({
    name: 'slice1',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        
    }
});

export default slicer1.reducer;
export {fetchData};
//type:"Coin/Fetch/pending"
