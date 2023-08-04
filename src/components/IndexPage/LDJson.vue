<template></template>
<script>
export default{
    data(){
        return {
            
        }
    },
    created(){
        this.insertTopScript();
        this.insertValuesData();
    },
    methods: {
        // insert value script to header
        insertTopScript(){
            let elHead = document.getElementsByTagName('head')[0]
                let scripts = elHead.getElementsByTagName( 'script' ); 
          
                for(let i = 0; i < scripts.length; i++) {
                  let sc = scripts[i];
                  if(sc.type == 'application/ld+json') sc.remove();
                }

            let titlePage = 'Centro Mudanzas Reto';
            let currentHref = window.location.pathname;
            if(currentHref != '/'){
                let otherTitle = currentHref.split('/');
                titlePage = otherTitle[1] + ' ' + otherTitle[2];
                titlePage = titlePage.replace('undefined', '');
                titlePage = titlePage.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
            }
           
            let dataObj = {
                 "@context": "http://schema.org",
                 "@type": "WebSite"
            };
                dataObj['name'] = titlePage;
                dataObj['url'] = window.location.href;

             let elScript = document.createElement('script');
             elScript.type = 'application/ld+json';

             elScript.text = JSON.stringify(dataObj);
             document.querySelector('head').appendChild(elScript);
        },
        insertValuesData(){
            let titlePage = 'Mudanzas Reto';
            let currentHref = window.location.pathname;
            if(currentHref != '/'){
                let otherTitle = currentHref.split('/');
                titlePage = otherTitle[1] + ' ' + otherTitle[2];
                titlePage = titlePage.replace('undefined', '');
                titlePage = titlePage.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
            }

            let chemaData = document.getElementById('chemaData');
                chemaData.innerHTML = '';
            let elScript = document.createElement('script');
                elScript.type = 'application/ld+json';
                
                let dataObj = {
                 "@context": "http://schema.org",
                 "@type": "RadioStation",
                 "image": [
                        {   "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto.png"
                        },{
                            "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto165.png",
                            "width": 165,
                            "height": 165
                        },{
                            "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto130.png",
                            "width": 130,
                            "height": 130
                        },{
                            "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto100.png",
                            "width": 100,
                            "height": 100
                        },{
                            "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto80.png",
                            "width": 80,
                            "height": 80
                        },{
                            "@type": "ImageObject",
                            "url": "https://mudanzasreto.com/chema/mudanzas-reto63.png",
                            "width": 63,
                            "height": 63
                        }
                 ],
                    "name": titlePage,
                    "url": window.location.href,
                    "sameAs": [],
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": 5,
                        "ratingCount": 5
                    },
                    "address": {
                        "@type": "PostalAddress"
                    },
                    "review": []
                };
                elScript.text = JSON.stringify(dataObj);
                chemaData.appendChild(elScript);
        }
    }
} // view-source:https://radiovolna.net/399683-russkoe-radio.html
</script>
