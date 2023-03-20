const mongoose = require("mongoose")
require("dotenv").config()

const MassageEmployee = require("./masaj/MassageEmployee")
const Massage = require("./masaj/Massage")
const UberSchedule = require("./uber/UberSchedule")
const Membership = require("./fitness/Membership")
const CityClient = require("./statistici/CityClient")
const ServiceCityClient = require("./statistici/ServiceCityClient")
const FitnessEmployee = require("./fitness/FitnessEmployee")
const User = require("./login/User")
const Feedback = require("./feedback/Feedback")

function connect() {
    mongoose.connect(process.env.DATABASE_URL, () => {
        console.log("Connected")
    })
}

function init() {
    createEmployees()
    createMassage()
    createUberSchedule()
    createMembership()
    createCityClient()
    createSericeCityClient()
    createUserEmployee()
    createFitnessEmployees()
    createFeedbacks()
}

async function createSericeCityClient() {
    try{
        const clientFitness = await ServiceCityClient.create({ serviciu: "fitness", iasi: 1630, cluj: 1961, bucuresti: 2026 })
        const clientMasaj = await ServiceCityClient.create({ serviciu: "masaj", iasi: 754, cluj: 1854, bucuresti: 1628 })
        const clientUber = await ServiceCityClient.create({ serviciu: "uber", iasi: 327, cluj: 420, bucuresti: 210})
    } catch(err) {
        console.log(err.message)
    }
}
async function createCityClient() {
    try{
        const clientIasi = await CityClient.create({ oras: "Iasi", fitness: 1630, masaj: 754, uber: 357 })
        const clientCluj = await CityClient.create({ oras: "Cluj", fitness: 1961, masaj: 1854, uber: 420 })
        const clientBuc = await CityClient.create({ oras: "Bucuresti", fitness: 2026, masaj: 1628, uber: 210 })
    } catch(err) {
        console.log(err.message)
    }
}

async function createMembership() {

    // IASI

    try{
        const fitnessFullIasi = await Membership.create({ oras: "Iasi", tip: "Fitness-Full", pret: 220, descriere: "Abonament Fitness, cu acces nelimitat în sala de fitness și cardio.", clienti: 111 })

        const fitnessDayTimeIasi = await Membership.create({ oras: "Iasi", tip: "Fitness Day Time", pret: 180, descriere: "Abonament Fitness, cu acces nelimitat in sala de fitness si cardio intre orele 07:00-16:00.", clienti: 100 })

        const fitnessOptSedinteIasi = await Membership.create({ oras: "Iasi", tip: "Fitness 8 sedinte", pret: 180, descriere: "Abonament Fitness cu 8 sedințe pe lună, cu acces în sala de fitness și cardio.", clienti: 120 })

        const fitness12SedinteIasi = await Membership.create({ oras: "Iasi", tip: "Fitness 12 sedinte", pret: 200, descriere: "Abonament Fitness cu 12 ședinte pe lună, cu acces în sala de fitness și cardio.", clienti: 98 })

        const fitness6LuniIasi = await Membership.create({ oras: "Iasi", tip: "Fitness 6 luni", pret: 1080, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 6 luni, având și alte beneficii.", clienti: 121 })

        const fitnessFidelizareIasi = await Membership.create({ oras: "Iasi", tip: "Fitness Fidelizare(FULL)", pret: 220, descriere: "Abonament Fitness Full, cu preț special începând cu a 5-a lună dacă nu ai nicio zi de pauză între abonamente.", clienti: 414 })

        const fitness3LuniIasi = await Membership.create({ oras: "Iasi", tip: "Fitness 3 luni", pret: 590, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 3 luni, având și alte beneficii.", clienti: 322 })

        const fitness1AnIasi = await Membership.create({ oras: "Iasi", tip: "Fitness 1 an", pret: 1920, descriere: "Permite accesul nelimitat în sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 1 an, având și alte beneficii.", clienti: 344 })
    } catch(err) {
        console.log('Iasi')
        console.log(err.message)
    }

        // CLUJ
    try{
        const fitnessFullCluj = await Membership.create({ oras: "Cluj", tip: "Fitness-Full", pret: 220, descriere: "Abonament Fitness, cu acces nelimitat în sala de fitness și cardio.", clienti: 188 })

        const fitnessDayTimeCluj = await Membership.create({ oras: "Cluj", tip: "Fitness Day Time", pret: 180, descriere: "Abonament Fitness, cu acces nelimitat in sala de fitness si cardio intre orele 07:00-16:00.", clienti: 120 })

        const fitnessOptSedinteCluj = await Membership.create({ oras: "Cluj", tip: "Fitness 8 sedinte", pret: 180, descriere: "Abonament Fitness cu 8 sedințe pe lună, cu acces în sala de fitness și cardio.", clienti: 100 })

        const fitness12SedinteCluj = await Membership.create({ oras: "Cluj", tip: "Fitness 12 sedinte", pret: 200, descriere: "Abonament Fitness cu 12 ședinte pe lună, cu acces în sala de fitness și cardio.", clienti: 54 })

        const fitness6LuniCluj = await Membership.create({ oras: "Cluj", tip: "Fitness 6 luni", pret: 1080, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 6 luni, având și alte beneficii.", clienti: 566 })

        const fitnessFidelizareCluj = await Membership.create({ oras: "Cluj", tip: "Fitness Fidelizare(FULL)", pret: 220, descriere: "Abonament Fitness Full, cu preț special începând cu a 5-a lună dacă nu ai nicio zi de pauză între abonamente.", clienti: 322 })

        const fitness3LuniCluj = await Membership.create({ oras: "Cluj", tip: "Fitness 3 luni", pret: 590, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 3 luni, având și alte beneficii.", clienti: 401 })

        const fitness1AnCluj = await Membership.create({ oras: "Cluj", tip: "Fitness 1 an", pret: 1920, descriere: "Permite accesul nelimitat în sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 1 an, având și alte beneficii.", clienti: 210 })
    } catch(err) {
        console.log('Cluj')
        console.log(err.message)
    }

    // BUCURESTI

    try{
        const fitnessFullBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness-Full", pret: 220, descriere: "Abonament Fitness, cu acces nelimitat în sala de fitness și cardio.", clienti: 599 })

        const fitnessDayTimeBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness Day Time", pret: 180, descriere: "Abonament Fitness, cu acces nelimitat in sala de fitness si cardio intre orele 07:00-16:00.", clienti: 119 })

        const fitnessOptSedinteBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness 8 sedinte", pret: 180, descriere: "Abonament Fitness cu 8 sedințe pe lună, cu acces în sala de fitness și cardio.", clienti: 100 })

        const fitness12SedinteBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness 12 sedinte", pret: 200, descriere: "Abonament Fitness cu 12 ședinte pe lună, cu acces în sala de fitness și cardio.", clienti: 67 })

        const fitness6LuniBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness 6 luni", pret: 1080, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 6 luni, având și alte beneficii.", clienti: 346 })

        const fitnessFidelizareBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness Fidelizare(FULL)", pret: 220, descriere: "Abonament Fitness Full, cu preț special începând cu a 5-a lună dacă nu ai nicio zi de pauză între abonamente.", clienti: 298 })

        const fitness3LuniBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness 3 luni", pret: 590, descriere: "Permite accesul nelimitat la sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 3 luni, având și alte beneficii.", clienti: 199 })

        const fitness1AnBuc = await Membership.create({ oras: "Bucuresti", tip: "Fitness 1 an", pret: 1920, descriere: "Permite accesul nelimitat în sala de fitness, bodybuilding și inclusiv la echipamentele cardio timp de 1 an, având și alte beneficii.", clienti: 298 })
    } catch(err) {
        console.log('Bucuresti')
        console.log(err.message)
    }

}
async function createFitnessEmployees() {
    try{
        const employee1Iasi = await FitnessEmployee.create({ oras: "Iasi", nume: 'Laura Thomas', numeClient: 'Will Smith', tip: 'Fitness 3 luni' })
        const employee2Iasi = await FitnessEmployee.create({ oras: "Iasi", nume: 'Laurent Bannock', numeClient: 'Chris Evans', tip: 'Fitness-Full' })
        const employee3Iasi = await FitnessEmployee.create({ oras: "Iasi", nume: 'Katy Bowman', numeClient: 'Vin Diesel', tip: 'Fitness 3 luni' })
        

        const employee1Cluj = await FitnessEmployee.create({ oras: "Cluj", nume: 'Alex Hutchinson', numeClient: 'Nicolas Cage', tip: 'Fitness 12 sedinte' })
        const employee2Cluj = await FitnessEmployee.create({ oras: "Cluj", nume: 'Ross Tucker', numeClient: 'Jason Momoa', tip: 'Fitness 6 luni' })
        const employee3Cluj = await FitnessEmployee.create({ oras: "Cluj", nume: 'James Dunne', numeClient: 'Jason Statham', tip: 'Fitness 3 luni' })

        const employee1Buc = await FitnessEmployee.create({ oras: "Bucuresti", nume: 'Tim Spector', numeClient: 'Jae Gruenke', tip: 'Fitness Day Time' })
        const employee2Buc = await FitnessEmployee.create({ oras: "Bucuresti", nume: 'Jacob Harden', numeClient: 'Anthony Warner', tip: 'Fitness-Full' })
        const employee3Buc = await FitnessEmployee.create({ oras: "Bucuresti", nume: 'Yann Le Meur', numeClient: 'Andy Lane', tip: 'Fitness 8 sedinte' })
    } catch(err) {
        console.log(err.message)
    }
}
async function createFeedbacks() {
    try{
        const feedbackMasajIasi = await Feedback.create({ oras: "Iasi", serviciu: 'Masaj', calificativ: 'Multumit', descriere: 'Mi-a placut' })
        const feedbackUberIasi = await Feedback.create({ oras: "Iasi", serviciu: 'Uber', calificativ: 'Extrem de multumit', descriere: 'Domnul sofer avea o dispozitie molipsitoare, mi-a urat succes la examen.' })
        const feedbacFitnessIasi = await Feedback.create({ oras: "Iasi", serviciu: 'Fitness', calificativ: 'Multumit', descriere: 'Sala este curata si antrenorii sunt de treaba.' })

        const feedbackMasajCluj = await Feedback.create({ oras: "Cluj", serviciu: 'Masaj', calificativ: 'Nemultumit', descriere: 'M-au durut toate oasele.' })
        const feedbackUberCluj = await Feedback.create({ oras: "Cluj", serviciu: 'Uber', calificativ: 'Extrem de multumit', descriere: 'Sofer prietenos si punctual.' })
        const feedbacFitnessCluj = await Feedback.create({ oras: "Cluj", serviciu: 'Fitness', calificativ: 'Extrem de multumit', descriere: 'Mi-am luat abonament pe un an.' })

        const feedbackMasajBuc = await Feedback.create({ oras: "Bucuresti", serviciu: 'Masaj', calificativ: 'Extrem de multumit', descriere: 'Foarte relaxant.' })
        const feedbackUberBuc = await Feedback.create({ oras: "Bucuresti", serviciu: 'Uber', calificativ: 'Multumit', descriere: 'Soferul a ajuns la timp.' })
        const feedbacFitnessBuc = await Feedback.create({ oras: "Bucuresti", serviciu: 'Fitness', calificativ: 'Multumit', descriere: 'Imi place privelistea de la banda de alergat.' })
    } catch(err) {
        console.log(err.message)
    }
}
async function createUberSchedule() {
    try{

        const cursa1 = await UberSchedule.create({ start: "Aleea Castanilor 23", destinatie: "Strada Labirint 1", distanta: 20, pret: 10, urbana: "NU", judet: "Iasi" })

        const cursa2 = await UberSchedule.create({ start: "Strada Mitropolit Varlaam", destinatie: "Soseaua Sararie", distanta: 12, pret: 6, urbana: "DA", judet: "Bucuresti" })

        const cursa3 = await UberSchedule.create({ start: "Calea Chisinaului 12/1", destinatie: "Strada George Enescu", distanta: 18, pret: 9, urbana: "DA", judet: "Cluj" })

        const cursa4 = await UberSchedule.create({ start: "Stradela Scaricica 9/1", destinatie: "Bulevardul Ilie Pintilie", distanta: 21, pret: 10.5, urbana: "DA", judet: "Iasi" })

        const cursa5 = await UberSchedule.create({ start: "Aleea Vasile Alecsandri 8/2", destinatie: "Soseaua Arcu", distanta: 7, pret: 3.5, urbana: "NU", judet: "Bucuresti" })

        const cursa6 = await UberSchedule.create({ start: "Fundacul Păun 4", destinatie: "Bulevardul 30 Decembrie", distanta: 12, pret: 6, urbana: "DA", judet: "Cluj" })

        const cursa7 = await UberSchedule.create({ start: "Stradela Uzinei Varianta 6", destinatie: "Bulevardul Tudor Vladimiresc", distanta: 15, pret: 7.5, urbana: "NU", judet: "Bucuresti" })

        const cursa8 = await UberSchedule.create({ start: "Trecerea Ursulea", destinatie: "Strada Nicolae Gane", distanta: 21, pret: 20, urbana: "DA", judet: "Cluj" })

        const cursa9 = await UberSchedule.create({ start: "Aleea Tudor Neculai", destinatie: "Fundacul Sf. Teodor", distanta: 15, pret: 7.5, urbana: "NU", judet: "Iasi" })

        const cursa10 = await UberSchedule.create({ start: "Strada Niciman", destinatie: "Fundacul Aurora", distanta: 12, pret: 6, urbana: "DA", judet: "Bucuresti" })

        const cursa11 = await UberSchedule.create({ start: "Aleea Teilor", destinatie: "Stradela Uzinei Varianta", distanta: 12, pret: 34, urbana: "NU", judet: "Bucuresti" })
    } catch(err) {
        console.log(err.message)
    }
}
async function createMassage() {

    // IASI
    try{
        const indianScalpMassage = await Massage.create({ oras: "Iasi", tip: "Indian Scalp Massage", durata: "1h 20min", pret: 180, clienti: 100 })

        const backNeckAndShoulders = await Massage.create({ oras: "Iasi", tip: "Back, Neck and Shoulders", durata: "2h 05min", pret: 300, clienti: 300 })

        const aromaticBodyRelax = await Massage.create({ oras: "Iasi", tip: "Aromatic Body Relax Massage", durata: "1h 30min", pret: 200, clienti: 150 })

        const hotStoneMassage = await Massage.create({ oras: "Iasi", tip: "Hot Stone Massage", durata: "1h 45min", pret: 250, clienti: 204 })
    } catch(err) {
        console.log('Iasi')
        console.log(err.message)
    }

    // CLUJ
    try{
        const indianScalpMassageCluj = await Massage.create({ oras: "Cluj", tip: "Indian Scalp Massage", durata: "1h 20min", pret: 180, clienti: 400 })

        const backNeckAndShouldersCluj = await Massage.create({ oras: "Cluj", tip: "Back, Neck and Shoulders", durata: "2h 05min", pret: 300, clienti: 800 })

        const aromaticBodyRelaxCluj = await Massage.create({ oras: "Cluj", tip: "Aromatic Body Relax Massage", durata: "1h 30min", pret: 200, clienti: 450 })

        const hotStoneMassageCluj = await Massage.create({ oras: "Cluj", tip: "Hot Stone Massage", durata: "1h 45min", pret: 250, clienti: 204 })
    } catch(err) {
        console.log('Cluj')
        console.log(err.message)
    }
    // BUCURESTI

    try{
        const indianScalpMassageBuc = await Massage.create({ oras: "Bucuresti", tip: "Indian Scalp Massage", durata: "1h 20min", pret: 180, clienti: 600 })

        const backNeckAndShouldersBuc = await Massage.create({ oras: "Bucuresti", tip: "Back, Neck and Shoulders", durata: "2h 05min", pret: 300, clienti: 510 })

        const aromaticBodyRelaxBuc = await Massage.create({ oras: "Bucuresti", tip: "Aromatic Body Relax Massage", durata: "1h 30min", pret: 200, clienti: 199 })

        const hotStoneMassageBuc = await Massage.create({ oras: "Bucuresti", tip: "Hot Stone Massage", durata: "1h 45min", pret: 250, clienti: 319 })
    } catch(err) {
        console.log('Bucuresti')
        console.log(err.message)
    }
}
async function createUserEmployee() {
    try {
        const userEmployee1 = await User.create({ username: "Malvina", email: "Malvina@angajat.serp.com", password: "$2a$10$zSoaFgpPkj/AQ0LJ.rDRd.7VK9wkYXbLKTmFf7rXceOFOiIgULDAi" })
    } catch(err) {
        console.log(err.message)
    }
}
async function createEmployees() {
    
    // IASI
    try{
        const massageEmployeeIasi1 = await MassageEmployee.create({ nume: "Elizabet Tolstoi", tipMasaj: "Indian Scalp Massage", oras: "Iasi", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
        marti: { data: "23.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
        miercuri: { data: "24.05.2022", durata: [{interval: "08:00-9:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Liber" }, { interval: "15:20-16:40", rezervat: "Liber" }, { interval: "17:00-18:00", rezervat: "Liber" } ]},
        joi: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
        vineri: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeIasi2 = await MassageEmployee.create({ nume: "Margo Baicu", tipMasaj: "Back, Neck and Shoulders", oras: "Iasi", luni: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
        marti: { data: "23.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Liber"}, { interval: "10:25-12:30", rezervat: "Liber" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
        miercuri: { data: "24.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Liber" } ]},
        joi: { data: "25.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Liber"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
        vineri: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeIasi3 = await MassageEmployee.create({ nume: "Elena angelescu", tipMasaj: "Aromatic Body Relax Massage", oras: "Iasi", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Liber" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeIasi4 = await MassageEmployee.create({ nume: "Maria Derbac", tipMasaj: "Hot Stone Massage", oras: "Iasi", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Liber"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Liber" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Liber" }, { interval: "17:00-18:45", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Liber"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Liber" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]}
        })
    } catch(err) {
        console.log('Iasi')
        console.log(err.message)
    }

    // CLUJ

    try{
        const massageEmployeeCluj1 = await MassageEmployee.create({ nume: "Andrew Garfield", tipMasaj: "Indian Scalp Massage", oras: "Cluj", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Liber"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Liber" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-9:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Liber" }, { interval: "15:20-16:40", rezervat: "Liber" }, { interval: "17:00-18:00", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            vineri: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeCluj2 = await MassageEmployee.create({ nume: "Robert De Niro", tipMasaj: "Back, Neck and Shoulders", oras: "Cluj", luni: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Liber" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Liber"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            vineri: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Liber" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeCluj3 = await MassageEmployee.create({ nume: "Kevin Spacey", tipMasaj: "Aromatic Body Relax Massage", oras: "Cluj", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Liber" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeCluj4 = await MassageEmployee.create({ nume: "Angelina Jolie", tipMasaj: "Hot Stone Massage", oras: "Cluj", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Liber"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Liber" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Liber" }, { interval: "17:00-18:45", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Liber" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]}
        })
    } catch(err) {
        console.log('Cluj')
        console.log(err.message)
    }

    // BUCURESTI

    try{
        const massageEmployeeBuc1 = await MassageEmployee.create({ nume: "John Snow", tipMasaj: "Indian Scalp Massage", oras: "Bucuresti", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Liber"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Liber"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Liber" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-9:20", rezervat: "Liber"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Liber" }, { interval: "15:20-16:40", rezervat: "Liber" }, { interval: "17:00-18:00", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Liber"}, { interval: "09:40-11:00", rezervat: "Liber" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]},
            vineri: { data: "25.05.2022", durata: [{interval: "08:00-09:20", rezervat: "Rezervat"}, { interval: "09:40-11:00", rezervat: "Rezervat" }, { interval: "11:20-12:40", rezervat: "Rezervat" }, { interval: "12:40-13:40", rezervat: "Pauza de masa" }, { interval: "13:40-15:00", rezervat: "Rezervat" }, { interval: "15:20-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeBuc2 = await MassageEmployee.create({ nume: "Keanu Reeves", tipMasaj: "Back, Neck and Shoulders", oras: "Bucuresti", luni: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Liber" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Liber" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Rezervat" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Liber" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]},
            vineri: { data: "22.05.2022", durata: [{interval: "08:00-10:05", rezervat: "Rezervat"}, { interval: "10:25-12:30", rezervat: "Liber" }, { interval: "12:30-13:30", rezervat: "Pauza de masa" }, { interval: "13:30-15:35", rezervat: "Rezervat" }, { interval: "15:55-18:00", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeBuc3 = await MassageEmployee.create({ nume: "Simona Popescu", tipMasaj: "Aromatic Body Relax Massage", oras: "Bucuresti", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Liber"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Liber"}, { interval: "09:50-11:20", rezervat: "Liber" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Liber"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Liber" }, { interval: "16:00-17:30", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:30", rezervat: "Rezervat"}, { interval: "09:50-11:20", rezervat: "Rezervat" }, { interval: "11:40-13:10", rezervat: "Rezervat" }, { interval: "13:10-14:10", rezervat: "Pauza de masa" }, { interval: "14:10-15:40", rezervat: "Rezervat" }, { interval: "16:00-17:30", rezervat: "Rezervat" } ]}
        })

        const massageEmployeeBuc4 = await MassageEmployee.create({ nume: "Scarlett Johansson", tipMasaj: "Hot Stone Massage", oras: "Bucuresti", luni: { data: "22.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Liber"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            marti: { data: "23.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]},
            miercuri: { data: "24.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Liber" }, { interval: "17:00-18:45", rezervat: "Liber" } ]},
            joi: { data: "25.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Rezervat" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Liber" } ]},
            vineri: { data: "26.05.2022", durata: [{interval: "08:00-09:45", rezervat: "Rezervat"}, { interval: "10:05-11:50", rezervat: "Liber" }, { interval: "12:10-13:55", rezervat: "Rezervat" }, { interval: "13:55-14:55", rezervat: "Pauza de masa" }, { interval: "14:55-16:40", rezervat: "Rezervat" }, { interval: "17:00-18:45", rezervat: "Rezervat" } ]}
        })
    } catch(err) {
        console.log('Bucuresti')
        console.log(err.message)
    }
}
exports.connect = connect
exports.init = init