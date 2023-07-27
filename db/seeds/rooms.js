/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert(
    [
    {
      // id:1
      name:"Facebook",
      floor:2,
      for_stuff:false
    },
    {
      // id:2
      name:"Google",
      floor:2,
      for_stuff:false
    },
    {
      // id:3
      name:"Apple",
      floor:2,
      for_stuff:false
    },
    {
      // id:4
      name:"Youtobe",
      floor:2,
      for_stuff:false
    },
    {
      // id:5
      name:"Github",
      floor:3,
      for_stuff:false
    },
    {
      // id:6
      name:"Ma'muriyat",
      floor:2,
      for_stuff:true
    },
    {
      // id:7
      name:"WhatsApp",
      floor:2,
      for_stuff:false
    },
    {
      // id:8
      name:"Microsoft",
      floor:3,
      for_stuff:false
    },
    {
      // id:9
      name:"Katta o'qituvchilar xonasi",
      floor:4,
      for_stuff:true
    },
    {
      // id:10
      name:"O'quv bo'limi",
      floor:2,
      for_stuff:true
    },
  ]);
};
