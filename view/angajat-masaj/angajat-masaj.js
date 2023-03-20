function getAngajati() {
    $( ".angajat" ).remove()
    $( ".table" ).remove()
    var $tableResponsive1 = $('#table-responsive1')
    var $tableResponsive2 = $('#table-responsive2')
    var $tableResponsive3 = $('#table-responsive3')
    var $tableResponsive4 = $('#table-responsive4')
    var oras = document.getElementById('city').value

    if(oras != '') {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:1234/api/v1/masaj/massageEmployee',
            success: function(angajati) {
                let angajatiAdaugati = []
                let angajatMasaj = []
                let counter = 0
                $.each(angajati, function(i, angajat) {
                    // console.log(angajat)
                    if(angajat.oras == oras) {
                        if(!angajatiAdaugati.includes(angajat.nume)) {
                            angajatMasaj[counter] = angajat
                            angajatiAdaugati[counter++] = angajat.nume
                        }  
                    }
                }) 

                let angajat1
                let angajat2
                let angajat3
                let angajat4

                switch (oras) {
                    case 'Iasi':
                        angajat1 = 'Elizabet Tolstoi'
                        angajat2 = 'Margo Baicu'
                        angajat3 = 'Elena Angelescu'
                        angajat4 = 'Maria Derbac'
                        break
                    case 'Cluj':
                        angajat1 = 'Andrew Garfield'
                        angajat2 = 'Robert De Niro'
                        angajat3 = 'Kevin Spacey'
                        angajat4 = 'Angelina Jolie'
                        break
                    case 'Bucuresti':
                        angajat1 = 'John Snow'
                        angajat2 = 'Keanu Reeves'
                        angajat3 = 'Simona Popescu'
                        angajat4 = 'Scarlett Johansson'
                        break
                }

                $.each(angajatMasaj, function(i, angajat) {
                    // console.log(angajat)
                    if(angajat.nume === angajat1) {
                        $tableResponsive1.append('<table class="angajat center"><thead><tr><th> <span class="bg-green padding-10px-tb padding-15px-lr border-radius-5  text-white font-size16 xs-font-size13">Angajat: ' + angajat.nume +
                        '</span></th><th><span class="bg-green padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Tip masaj executat: ' + angajat.tipMasaj + 
                        '</span></th><th><span class="bg-green padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" itemprop="about">Program de lucru: </span></th></tr></thead></table> <table class="table table-bordered center"><thead><tr class="bg-green text-white"><th class="text-uppercase">Ora</th><th class="text-uppercase">Luni <p>' + angajat.luni.data + 
                        '</p></th><th class="text-uppercase">Marti <p>' + angajat.marti.data + '</p></th><th class="text-uppercase">Miercuri <p>' + angajat.miercuri.data + 
                        '</p></th><th class="text-uppercase">Joi <p>' + angajat.joi.data + '</p></th><th class="text-uppercase">Vineri <p>' + angajat.vineri.data + '</p></th></tr></thead><tbody><tr><td class="align-middle">' + angajat.luni.durata[0].interval +
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">' + angajat.luni.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[0].rezervat +
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[0].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[1].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[1].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[2].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[2].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[3].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 ">' + angajat.luni.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[3].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[4].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[4].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[4].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[5].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[5].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[5].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[6].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[6].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[6].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[6].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[6].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[6].rezervat + 
                        '</span></td></tr></tbody></table>')
                    } else if(angajat.nume === angajat2) {
                        $tableResponsive2.append('<table class="angajat center"><thead><tr><th> <span class="bg-bgreen padding-10px-tb padding-15px-lr border-radius-5  text-white font-size16 xs-font-size13">Angajat: ' + angajat.nume +
                        '</span></th><th><span class="bg-bgreen padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Tip masaj executat: ' + angajat.tipMasaj + 
                        '</span></th><th><span class="bg-bgreen padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" itemprop="about">Program de lucru: </span></th></tr></thead></table> <table class="table table-bordered center"><thead><tr class="bg-bgreen text-white"><th class="text-uppercase">Ora</th><th class="text-uppercase">Luni <p>' + angajat.luni.data + 
                        '</p></th><th class="text-uppercase">Marti <p>' + angajat.marti.data + '</p></th><th class="text-uppercase">Miercuri <p>' + angajat.miercuri.data + 
                        '</p></th><th class="text-uppercase">Joi <p>' + angajat.joi.data + '</p></th><th class="text-uppercase">Vineri <p>' + angajat.vineri.data + '</p></th></tr></thead><tbody><tr><td class="align-middle">' + angajat.luni.durata[0].interval +
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">' + angajat.luni.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[0].rezervat +
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[0].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[1].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[1].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[2].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[2].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[3].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 ">' + angajat.luni.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[3].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[4].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[4].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[4].rezervat + 
                        '</span></td></tr></tbody></table>')
                    } else if (angajat.nume == angajat3) {
                        $tableResponsive3.append('<table class="angajat center"><thead><tr><th> <span class="bg-maro padding-10px-tb padding-15px-lr border-radius-5  text-white font-size16 xs-font-size13">Angajat: ' + angajat.nume +
                        '</span></th><th><span class="bg-maro padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Tip masaj executat: ' + angajat.tipMasaj + 
                        '</span></th><th><span class="bg-maro padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" itemprop="about">Program de lucru: </span></th></tr></thead></table> <table class="table table-bordered center"><thead><tr class="bg-maro text-white"><th class="text-uppercase">Ora</th><th class="text-uppercase">Luni <p>' + angajat.luni.data + 
                        '</p></th><th class="text-uppercase">Marti <p>' + angajat.marti.data + '</p></th><th class="text-uppercase">Miercuri <p>' + angajat.miercuri.data + 
                        '</p></th><th class="text-uppercase">Joi <p>' + angajat.joi.data + '</p></th><th class="text-uppercase">Vineri <p>' + angajat.vineri.data + '</p></th></tr></thead><tbody><tr><td class="align-middle">' + angajat.luni.durata[0].interval +
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">' + angajat.luni.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[0].rezervat +
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[0].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[1].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[1].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[2].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[2].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[3].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 ">' + angajat.luni.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[3].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[4].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[4].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[4].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[5].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[5].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[5].rezervat + 
                        '</span></td></tr></tbody></table>')
                    } else if(angajat.nume == angajat4) {
                        $tableResponsive4.append('<table class="angajat center"><thead><tr><th> <span class="bg-maroniu padding-10px-tb padding-15px-lr border-radius-5  text-white font-size16 xs-font-size13">Angajat: ' + angajat.nume +
                        '</span></th><th><span class="bg-maroniu padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Tip masaj executat: ' + angajat.tipMasaj + 
                        '</span></th><th><span class="bg-maroniu padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" itemprop="about">Program de lucru: </span></th></tr></thead></table> <table class="table table-bordered center"><thead><tr class="bg-maroniu text-white"><th class="text-uppercase">Ora</th><th class="text-uppercase">Luni <p>' + angajat.luni.data + 
                        '</p></th><th class="text-uppercase">Marti <p>' + angajat.marti.data + '</p></th><th class="text-uppercase">Miercuri <p>' + angajat.miercuri.data + 
                        '</p></th><th class="text-uppercase">Joi <p>' + angajat.joi.data + '</p></th><th class="text-uppercase">Vineri <p>' + angajat.vineri.data + '</p></th></tr></thead><tbody><tr><td class="align-middle">' + angajat.luni.durata[0].interval +
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">' + angajat.luni.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[0].rezervat +
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[0].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[0].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[1].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[1].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[1].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[2].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[2].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[2].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[3].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13 ">' + angajat.luni.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[3].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[3].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[4].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[4].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[4].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[4].rezervat + 
                        '</span></td></tr><tr><td class="align-middle">' + angajat.luni.durata[5].interval + 
                        '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.luni.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.marti.durata[5].rezervat + 
                        '</span></td><td ><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.miercuri.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.joi.durata[5].rezervat + 
                        '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajat.vineri.durata[5].rezervat + 
                        '</span></td></tr></tbody></table>')
                    }
                })
                
            }
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        })
    }
}

setInterval(function()
{
    var oras = document.getElementById('city').value
    if(oras != '') {
        getAngajati()
    }
}, 30000)