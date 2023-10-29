const __jolt = async (input: string, spec: string, sort: boolean): Promise<any> =>  {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                input,
                spec,
                sort: sort.toString()
            }).toString(),
        };

        const url = 'https://jolt-demo.appspot.com/transform';
        const request = new Request(url, requestOptions);

        const response = await fetch(request);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const buffer = await response.arrayBuffer();
        const text = decode('iso-8859-1', buffer);
        return text;
    } catch (error) {
        return error;
    }
}

function decode(format: string, buffer: ArrayBuffer) {
    const decoder = new TextDecoder(format);
    const data = decoder.decode(buffer);
    return data;
}

export { __jolt};