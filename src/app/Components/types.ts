type Speciality = {
  id: number,
  name: string,
  cost: number
}

type Appoiment = {
  id: number | null,
  patientId: number | null,
  medId: number | null,
  dateId: number | null,
  specialityId: number | null,
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


export {
  Speciality,
  Appoiment,
  Med,
  Date
};
