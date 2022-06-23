import apisauce from 'apisauce'

const create = (baseURL = 'https://nite.mockable.io/') => {
    const api = apisauce.create({
        baseURL,
        headers:{
            'Cache-Control': 'no-cache'
        },
        timeout: 3000
    })

    const getVins = () => {
        return api.get('listevins')
    }

    const sendVin = (vin) => {
        return api.post('test', vin, {
            onUploadProgress: (e) => {
                const progress = e.loaded / e.total
            }
        })
    }

    return {
        getVins,
        sendVin
    }
}

export default {
    create
}