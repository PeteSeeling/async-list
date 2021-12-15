

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODkwMywiZXhwIjoxOTU1MDg0OTAzfQ.WbfpkieH6xyID6pt237Vr_Y78Fs1wnkmUdHXoHg5twU';


const SUPABASE_URL = 'https://osvbnemrpkxnsdboazbe.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);




export async function getDogBreeds(){
    const response = await client
        .from('breeds1')
        .select('*');
   
    return response;
}




