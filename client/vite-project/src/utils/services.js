export const baseUrl = "http://localhost:5000/api"

export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });

    try {
        const data = await response.json();

        if (!response.ok) {
            let message;

            if (data?.message) {
                message = data.message;
            } else {
                message = data;
            }

            return { error: true, message };
        }

        return data;
    } catch (error) {
        // Tratar caso o servidor não retorne JSON válido
        return { error: true, message: "Erro ao processar a resposta do servidor" };
    }
};

export const getRequest =async (url) => {

    const response = await fetch(url)

    const data = await response.json()
    
    if (!response.ok){
        let message = "Um erro ocorreu...";

        if (data?.message){
            message =  data.message;
        }

        return {error: true, message};
    }

    return data;
};
 