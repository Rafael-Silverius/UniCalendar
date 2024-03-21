import supabase from "./supabase";

export async function getRoom(id) {
  const { data, error } = await supabase.from("room").select("*").eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Lectures could not be loaded");
  }
  return data;
}

export async function getLecturesOfDate(date) {
  const { data, error } = await supabase
    .from("lectures")
    .select("name, duration , modules(name , roomId)")
    .eq("date", date);

  if (error) {
    console.log(error);
    throw new Error("Lectures could not be loaded");
  }
  // getRoom(modules.roomid);
  return data;
}
