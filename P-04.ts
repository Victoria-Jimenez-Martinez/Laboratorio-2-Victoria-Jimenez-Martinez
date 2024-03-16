function Persona (name:string, ci: string, email: string):{ name: string, ci: string, email: string }{
return { name, ci, email};
}

const persona = Persona ("Victoria Jimenez Martinez", "8610323", "edenvictoriajimenes@gmail.com");
console.log(persona);