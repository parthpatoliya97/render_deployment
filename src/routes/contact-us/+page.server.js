import fs from 'fs'
export async function load() {
    const data=JSON.parse(fs.readFileSync('content/contactUs.json','utf-8'))
    return data
    
}

export const actions={
    default:async ({request})=>{
        const data=await request.formData()
      
        const firstName=data.get('firstName')
        const lastName=data.get('lastName')
        const email=data.get('email')
        const phoneNumber=data.get('phoneNumber')
        const message=data.get('message')

       console.log("submited formData is under here :")
       console.log("firstName :"+firstName)
       console.log("lastName :"+lastName)
       console.log("email :"+email)
       console.log("phoneNumber :"+phoneNumber)
       console.log("message :"+message)
    }
}