import supabase from "./supabase";
export async function getEducation() {
   let { data: education, error } = await supabase
    .from('education')
    .select('*')
    if (error) {
      throw new Error("education could not be loaded");
    }
    
    return education;
  }
  export async function getExperience() {
    const { data, error } = await supabase.from("experience").select("*");
    if (error) {
      throw new Error(" could not be loaded");
    }
    
    return data;
  }
  export async function getCertificates() {
    const { data, error } = await supabase.from("certificates").select("*");
    if (error) {
      console.error("Error fetching certificates:", error);
      throw new Error("Certificates could not be loaded");
    }
    return data;
  }
  export async function getPortfolio() {
    const { data, error } = await supabase.from("portfolio").select("*");
    if (error) {
      console.error("Error fetching certificates:", error);
      throw new Error("Certificates could not be loaded");
    }
    return data;
  }