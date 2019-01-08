import axios from 'axios';


export const fetchData = () => {
	return function(dispatch)
	{
		axios({
            method: 'get',
            url: "https://reqres.in/api/users?per_page=10"

        }).then((response)=> {
			dispatch({type:"FETCH_DETAILS_SUCCESS",payload:response.data});
		}).catch((err)=>{
			dispatch({type:"FETCH_DETAILS_FAILURE",payload: err})
		})
	}

};