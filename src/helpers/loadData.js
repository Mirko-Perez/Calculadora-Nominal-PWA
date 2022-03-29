import { db } from "../firebase/config-firebase";

export const loadData = async (uid) => {
  const res = await db.collection(`${uid}/nominas/nomina`).get();

  const data = [];

  res.forEach((nomina) => {
    const nominaData = nomina.data();

    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  return data;
};
