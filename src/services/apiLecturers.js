import supabase from "./supabase";

export async function getStaff() {
  const { data, error } = await supabase.from("staff").select("*");

  if (error) {
    console.log(error);
    throw new Error("Lecturer could not be created");
  }
  return data;
}

export async function editStaff(newdata, id) {
  const { data, error } = await supabase
    .from("staff")
    .update({ ...newdata })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Lecturer could not be updated");
  }
  return data;
}
