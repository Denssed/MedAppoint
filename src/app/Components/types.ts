type Speciality = {
  id: number,
  name: string,
  consult_cost: number
}

type Appoiment = {
  id: number | null,
  patient_id: number | null,
  med_id: number | null,
  date_timeStamp: any,
  speciality_id: number | null,
  cost: number | null
}

type Med = {
  id: number,
  name: string,
  surName: string,
  specialityId: number
}

type Date = {
  id: number,
  date: string
}

type User = {
  id: number,
  cedula: string,
  name: string,
  password: string,
  surName: string,
  email: string,
  age: number,
  role: string
}


export {
  Speciality,
  Appoiment,
  Med,
  Date,
  User
};
