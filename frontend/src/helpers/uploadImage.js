//const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`


const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","E-Commerce")
    

    const dataResponse = await fetch('https://api.cloudinary.com/v1_1/dcp31rdfg/image/upload',{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 