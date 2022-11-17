const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../JavaScript/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    })

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        let pokeApodo = data.name;
        let pokeStat_name = data.stats;
        let pokeStat_attribute = data.stats;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        pokeNam(pokeApodo);
        pokeStats_name(pokeStat_name);
        pokeStats_attribute(pokeStat_attribute);
        console.log(pokeImg);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNam = (names) => {
    const pokeNames = document.getElementById("names");
    pokeNames.innerHTML = '<p>' + names.toUpperCase() + '.</p>';
    console.log(names.toUpperCase());
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML = '<p>Abilities: ' + abilitiesName + '.</p>';
}

const pokeStats_name = (stat_name) => {
    
    const pokeS_name = document.getElementById("hp");
    const pokeS_attack = document.getElementById("attack");
    const pokeS_defense = document.getElementById("defense");
    const pokeS_special_attack = document.getElementById("special-attack");
    const pokeS_special_defense = document.getElementById("special-defense");
    const pokeS_speed = document.getElementById("speed");

    const arreglo = stat_name.map((item1) => item1.stat.name);
    console.log(arreglo);

    pokeS_name.innerHTML = '<p>' + arreglo[0].toUpperCase() + ': </p>';
    pokeS_attack.innerHTML = '<p>' + arreglo[1].toUpperCase() + ': </p>';
    pokeS_defense.innerHTML = '<p>' + arreglo[2].toUpperCase() + ': </p>';
    pokeS_special_attack.innerHTML = '<p>' + arreglo[3].toUpperCase() + ': </p>';
    pokeS_special_defense.innerHTML = '<p>' + arreglo[4].toUpperCase() + ': </p>';
    pokeS_speed.innerHTML = '<p>' + arreglo[5].toUpperCase() + ': </p>';
}

const pokeStats_attribute = (stat_attribute) => {

    const pokeS_attribute = document.getElementById("hp-attribute");
    const pokeS_attribute1 = document.getElementById("attack-attribute");
    const pokeS_attribute2 = document.getElementById("defense-attribute");
    const pokeS_attribute3 = document.getElementById("special-attack-attribute");
    const pokeS_attribute4 = document.getElementById("special-defense-attribute");
    const pokeS_attribute5 = document.getElementById("speed-attribute");

    const arreglo2 = stat_attribute.map((item2) => item2.base_stat);

    pokeS_attribute.innerHTML = '<p> ' + arreglo2[0] + ' puntos.</p>';
    pokeS_attribute1.innerHTML = '<p> ' + arreglo2[1] + ' puntos.</p>';
    pokeS_attribute2.innerHTML = '<p> ' + arreglo2[2] + ' puntos.</p>';
    pokeS_attribute3.innerHTML = '<p> ' + arreglo2[3] + ' puntos.</p>';
    pokeS_attribute4.innerHTML = '<p> ' + arreglo2[4] + ' puntos.</p>';
    pokeS_attribute5.innerHTML = '<p> ' + arreglo2[5] + ' puntos.</p>';
   
}
