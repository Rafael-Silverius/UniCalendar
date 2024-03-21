import supabase from "./supabase";

export async function createStudent(newUser) {
  const { data, error } = await supabase
    .from("student")
    .insert([newUser])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Student could not be created");
  }
  return data;
}
