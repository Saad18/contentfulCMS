import { useState, useEffect } from 'react';
import { createClient } from "contentful";

const client = createClient({

    space: 'vbikt4bhx25h',
    environment: 'master', // master is default
    accessToken: 'dC-1lecCkA4MKUOS7SKgKhaXgBLv8QgpOnY4WoXhfug',

});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'projects' });
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields //destructuring
                const id = item.sys.id
                const img = image?.fields?.file?.url // check the nested location
                return { title, url, id, img }
            });
            setProjects(projects)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return { loading, projects };
}
