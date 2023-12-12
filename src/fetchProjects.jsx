import { createClient } from "contentful";

const client = createClient({

    space:  'vbikt4bhx25h',
    environment: 'master',
    accessToken: 'dC-1lecCkA4MKUOS7SKgKhaXgBLv8QgpOnY4WoXhfug',

});

client
.getEntries({content_type: 'projects'})
.then((Response)=> console.log(Response));