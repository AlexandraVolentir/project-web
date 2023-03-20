function getAngajati() {
    $( ".angajat" ).remove()
    $( ".table" ).remove()
    var $container = $('#container')

    var oras = document.getElementById('city').value

    if(oras != '') {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:1234/api/v1/fitness/fitnessEmployee',
            success: function(angajati) {
                let angajatiTabel = []
                let angajatiAdaugati = []
                let counter = 0
                $.each(angajati, function(i, angajat) {
                    // console.log(angajat)
                    if(angajat.oras == oras) {
                        if(!angajatiAdaugati.includes(angajat.nume)) {
                            angajatiAdaugati[counter] = angajat.nume
                            angajatiTabel[counter++] = angajat
                            $container.append('<div class="table-responsive" itemscope itemtype="https://schema.org/Table" id="table-responsive-' + angajat._id + '"></div>')
                            let idTable = "#table-responsive-".concat(angajat._id)
                            let $tableResponsiveAngajat = $(idTable)
                            $tableResponsiveAngajat.append('<table class="angajat center"><thead><tr><th><span class="bg-green padding-10px-tb padding-15px-lr border-radius-5  text-white font-size16 xs-font-size13">Angajat:' +  angajat.nume + 
                            '</span></th><th><span class="bg-green padding-10px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13" itemprop="about">Clientii curenti: </span></th></tr></thead></table>')
                            $tableResponsiveAngajat.append('<table class="table table-bordered center" id="table-clienti-' + angajat._id + '"><thead><tr class="bg-green text-white"><th class="text-uppercase">Client</th><th class="text-uppercase">Tip abonament</th><th class="text-uppercase">Start abonament</th></tr></thead></table>')
                            
                            $.each(angajati, function(i, angajatTemp) {
                                if(angajatTemp.nume == angajat.nume) {
                                let idTable = "#table-clienti-".concat(angajat._id)
                                let $tabelClienti = $(idTable)
                                $tabelClienti.append('<tr><td class="align-middle">' + angajatTemp.numeClient + 
                                '</td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">' + angajatTemp.tip + 
                                '</span></td><td><span class="bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">' + angajatTemp.data + '</span></td></tr>')
                                }
                            })

                        }
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
        $( ".table-responsive" ).remove()
        getAngajati()
    }
}, 30000)