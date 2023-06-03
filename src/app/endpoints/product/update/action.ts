import { IUpdateUser } from "@/types/updateUser";
import { supabase } from "@/utils/supabase";

export async function actionStoreUpdate({ id,camp,value}:IUpdateUser) {
  const { data,statusText } = await supabase
  .from('product')
  .update({ [camp]: value })
  .eq('id', id)

  return data == null ? statusText : data
}