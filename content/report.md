Reports
============================

## Kmom01

### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.

Det verkar väldigt smidigt och enkelt - det tog inte lång tid alls att sätta sig in i ramverket och hur Express fungerar med Pug. Jag har inte många lika ramverk att jämföra med - det enda jag kan jämföra med är Anax. Express känns mycket mindre rörigt för tillfället och mycket mer light-weight. Allting bara funkade och man behövde inte riktigt initiera och hålla på med alla moduler som i Anax.

Pug kändes också väldigt enkelt, men kanske lite för enkelt? Det kan jämföras med Markdown - det är väldigt simpelt men inte alls flexibelt att jobba med vilket ofta gör det mycket svårare att implementera mer komplex kod. Jag hade inget problem med Pug i detta kursmoment, men då jag använde Markdown för mina vyer märkte jag att det blev problem att styla grejer på sidan. Skriver man ren HTML i Markdown filen, skriver den bara ut koden som text - man kan alltså inte använda HTML i Markdown här verkar det som. Det är en väldigt jobbig begränsning.

Jag kan tänka mig att Pug kan ha vissa begränsningar också. Vi får se.

### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?

Jag tog en titt på app-generatorn men använde mig inte av den direkt. Istället skapade jag strukturen själv så den liknande den från app-generatorn. Detta gjorde jag för att bland annat för att få lite bättre förståelse i hur jag kan arbeta i ramverket. Känns bättre att göra allting från scratch då. Använderman app-generatorn är det lätt att man kanske missar varför det ser ut så.

Mina vyer ligger i *views/* och mina statiska filer (css, bilder, js) ligger i en mapp jag har valt att kalla *static/* iställer för public. Känns lite mer logiskt.

I *app/* ligger min *app.js* som ansvarar för själva app-objektet - initiering och exportering så den kan användas i *index.js*. Min *index.js* är alltså nu mycket mindre och det enda den gör är att starta servern på rätt port.

Men, jag har också en mapp *routes/* precis som strukturen från app-generatorn. Där ligger en *index.js* som för tillfället tar hand om alla routes och exporterar dem så de kan användas i *app.js*.

Slutligen, *content/* innehåller alla Markdown-filer som används, och *less/* innehåller lite LESS filer som används för styling av sidan.

Allting har alltså sin plats och jag tycker det är mycket bra organiserat och koden är bra modulariserad. Riktigt nöjd med det.

### Använde du någon form av scaffolding som Express erbjuder?

Jag testade app-generatorn, men använde inte den till mina sida. Exempelkoden var dock till stor hjälp och jag tog vissa bitar därifrån och anpassade dem för att spara lite tid. Kändes onödigt att börja om från början efter jag hade jobbat igenom artiklen, så jag strukturera min kod som i artiklen först och anpassade den sedan för att likna strukturen från app-generatorn och uppnå en lite högre kodkvalitet.

### Jobbar du med Markdown för innehållet, eller annat liknande?

Ja, jag testade att använda Markdown då jag från början tyckte det kunde göra det enklare och renare. Men efter problemen som uppstod med bland annat styling av sidorna, kanske jag bytar till något annat i kommande kmom.

## Kmom02

### Har du jobbat med Docker eller andra virtualiseringstekniker innan?

Just Docker kändes väldigt nytt och det är inget jag har använt tidigare. Dock har jag kört lite med VirtualBox som kan användas för att virtualisera OS inom ett OS.

### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?

Jag ser det som ett bra sätt att kunna testa sitt projekt i flera miljöer med samma källkod - det kändes lite coolt. Men sitter man och utvecklar på Windows ska man kanske tänka om, då Docker i stort sätt inte fungerade alls i min Windows miljö. Sitter man på Linux, ja, då är Docker jättebra för att testa.

Men i allmänhet känns det just nu som att Docker skapar mer problem än vad det är värt.

### Gick allt smidigt eller stötte du på problem?

Jag stötte på fler problem än jag kan nämna. Först försökte jag få Docker att fungera i min Windows miljö där jag sitter och kodar. Flera timmar spenderade jag på detta, och artiklen var inget hjälp alls - snarare tvärtom då artiklen bara antog att läsaren körde på Linux, och om man följde den på Windows fungerade ingenting. Det tog mycket egen research för att komma fram till varför det inte funkade. Men efter varje problem jag löste uppstod ett nytt.

Behövde installera Windows 10 Education som de stod i forumet, sen kunde jag faktiskt installera Docker. Efter det försökte jag köra igenom artiklen vilket inte gick alls, men jag lyckades skapa till slut med hjälp av Google, att skapa tre versioner av PHP tillsammans med Apache, och fick det att funka med cimage.

Men när jag skulle köra med node gick det inte alls att starta servern. Då bestämde jag mig för att göra det på min Linux maskin - min server dator. Det tog några minuter att installera Docker där och få upp mina tre node js versioner. På Windows tog det flera timmar. Lite skillnad.

### Skapade du din egen image, berätta om den?

Jag kände mig inte direkt motiverad att göra detta efter alla problem med Docker. Dessutom känner jag mig inte riktigt redo att lägga upp något på Docker Store när jag precis har börjat med det. Förstår att det är ett sätt att bättre bekanta sig med Docker, men det känns inte helt okej.

## Kmom03

### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?

Jag följde artiklen för kursmomentet och bestämde mig för att köra enhetstester med
Mocha och visa kodtäckning med hjälp av nyc. Varför? Helt enkelt tittade jag på alla
alternativen som gavs i artiklen och tog den som kändes enklast att implementera
och komma igång med.

### Berätta om din CI-kedja och reflektera över de valen du gjorde?

Min CI-kedja består av Travis som ser till att min build kan byggas felfritt. För
Kodtäckning används coveralls och för kodkvalitet har jag Scrutinizer, Better Code Hub
och Codeclimate som visar maintainability. All de tre sista har med kvaliteten av koden
att göra, men de visar olika saker som de tycker kan fixas i din kod - saker som jag tycker
är bra att ha koll på.

Jag valde helt enkelt de tjänsterna som jag använt tidigare, och la bara till Coveralls
för min kodtäckning. Varför jag valde den var för att den kändes enklast och lättast
att integrera.

Med denna CI-kedjan känns det som att jag har riktigt bra koll på kvaliteten av mina projekt.

### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.

Det var inga problem alls. jag skapade tre docker-filer och images i .yml filen för att testa på olika node versioner. Docker-filerna ser till att den kör npm install innan den kör testerna, annars funkar det inte. Make test1, 2, 3 skapades i min Makefil där kommandot kallas för att köra testerna i docker containers. Det funkar bra.

Klart det finns en nytta med detta, då man kan testa sin kod snabbt i flera olika miljöer samtidigt.

### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?

Nu gjorde jag inga speciella tester i min redovisningssida eftersom vi också skulle
börja på vår egna applikation där vi bättre kunde utveckla enligt TDD. Till redovisningsrepot tog jag bara card.js från exempelkoden för att se att alla mina tester
fungerade.

I min app som jag påbörjade har jag gjort det en prioritet att skriva tester innan
själva koden. Nu har jag bara precis börjat på min app vilket betyder att jag inte har
kommit speciellt långt med detta än, men min tanke är att ha en klass för att hantera
användare, och till den har jag börjat skriva ett par enkla tester för att känna på
TDD-konceptet.

Jag gillar det faktiskt då man verkligen får med testerna redan från början, vilket är vad jag egentligen ville i förgående kurser där vi la in enhetstester långt efter vi skrev koden. Det blir enkalre, snyggare och bättre tycker jag, men klart är det lite ovant
och konstigt att skriva testerna först.

### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.

Jag funderade länge på vad jag skulle göra och bestämnde mig till slut för att göra en chatt applikation. Kommer ihåg ett snack med mos i slutet av ramverk 1 kursen då han nämnde just en chatt i realtid med websockets och databaser. I uppgiften listades vad som skulle gälla för applikationen, och en chatt kan uppfylla alla, så det är perfekt.

Just nu har jag en delvis fungerande chatt utan användare och meddelanden som försvinner -
den nås genom en webbläsare då jag valde att använda HTML till mina views. Express används dock fortfarande, tillsammans med EJS för att göra det möjligt att köra med HTML på ett bra sätt. För att kunna skicka meddelanden har jag redan lagt till websockets så det funkar i realtid. I framtiden kan en databas användas för hantering av användare.

Jag gjorde allting från scratch, och tog bara hjälp av redovisningssidan för att skapa min testsuite som är densamma som jag nämnde ovan. Filstrukturen är också i stort sätt samma som redovisningssidan då jag tycker det känns väldigt logiskt och organiserat.

Man kan starta servern med hjälp av make start-docker, men då startas den på port 1337.  

## Kmom04

### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?

Detta kändes helt nytt för min del. Kanske har jag stött på något liknande tidigare
med JavaScript - om det nu kan räknas som realtidsprogrammering - men har aldrig använt web sockets eller liknande tidigare för att skapa realtidskommunikation mellan två klienter.

### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?

Jag började redan i kmom02 då jag bestämde mig för att göra en chatt app. Då följde jag lite tutorials på nätet och därför började jag använda socket.io. Det gick ju bra, kändes riktigt coolt och enkelt just då.

Men det var såklart innan jag kom till detta kursmomentet...

### Berätta om din chatt som du integrerade i redovisa-sidan.

Eftersom min applikation redan var en chatt bestämde jag mig för att helt enkelt fortsätta bygga på den med socket.io. Det gick sådär. Med socket.io kändes det svårt att fullt göra uppgiften så som det var tänkt. När det gäller applikationsprotokoll och subprotokoll var det riktigt svårt att greppa hur och vad dessa var inom socket.io. Artiklen visade i stort sätt bara hur man gör det med ws, men förklarade inte över huvud taget vad det faktiskt är för något.

Till slut tror jag att jag fick rätt på det. Som sagt byggde jag på det som jag gjorde i kmom02 och skapade en klass för servern, för att fungera bättre med testerna jag skrivit. Jag lyckades inte att testa uppkoppling och nedkoppling till websockets/chatten så det får komma senare, men jag kunde iaf ha kvar några andra tester. Det går emot att server-delen ska funka som en modul som hakar sig fast på webbservern. Så funkar det i stort sätt redan.

En klient skapade jag med jQuery som laddas på den sidan chatten körs - den filen ligger i /js/socket.js. På redovisningssidan finns chatten under /chat. Där kommer man först till en sida där man kopplar upp sig till chatten med en nick. Skriv en nick och klicka på "join" så kommer man till chatten där ett meddelande visar att du har joinat chatten. Det finns en lista på alla användare som är uppkopplade för tillfället, och hur många. Man kan skriva meddelande eller lämna chatten. Klickar man bort fönstret eller uppdaterar det så kopplas användaren bort från chatten, och måste logga in igen. Servern upptäcker alltså när klienter försvinner. Meddelande presenteras till alla kopplade klienter och med ett nick framför (vem som skrev meddelandet).

Jag la också en del tid på att testa mot XSS attacker. Från början var den öppen för såna attacker, nu är det inte det. Det är skyddat i fältet där man skriver en nick och i fältet där man skriver meddelande.

### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.

Ja, den är ju densamma som för chatten vi gjorde. Så finns inte mycket mer att säga om det. Men jag ser fram emot att jobba med en databas i nästa kmom.

## Kmom05

Jag har spenderat många, många timmar på att få testerna att funka. Testerna ligger under min chat applikation, jag har inte lagt till testerna på me-sidan eftersom modulerna är testade i min applikation. Jag har inte tid eller lust att göra tester då samma moduler två gånger (testerna blir lite annorlunda eftersom datan är annorlunda, så det krävs ändå en del jobb om man kopierar över testerna. Tester på chatserver i me-sidan innebär att jag måste integrera så databasen används med chatten, vilket jag redan har gjort i min applikation. Tester på databas i me-sidan innebär att jag måste ändra mina tester så de funkar med crud-datan jag använder. Som du ser blir det mycket jobb för att göra samma sak igen.).

I min coverage tar jag med filer som jag faktiskt haft tid att testa. Om filer inte finns med har jag inte haft tid eller hittat ett sätt att faktiskt testa dem... Jag tar nu med min socket.js men föklara gärna varför ni vill ha med en fil som inte är testad i min coverage. Det ända det gör är att dra ner min totala code coverage. Ni säger också att min coverage ska täcka in ALLA js-filer. Vilka är ALLA? Min index.js, app.js, mina routes? Just nu känns det väldigt otydligt när det gäller vad som ska testas och vad som ska tas med i kodtäckningen. Trodde detta huvudsakligen var upp till oss själva, men tydligen inte?

Jag kan inte hitta någonstans där det tydligt står vad som ska tas med i kodtäckningen, eller vilka filer som ska testas. Därför blir det förvirrande när detta påpekas i rättningen. Förklara. Gör det tydligare.

Jag har uppdaterat min chat-app's readme med instruktioner för hur man startar upp den och kör tester.

### Hur gick det att komma igång med databasen MongoDB?

Det gick förvånansvärt bra. Lite klurigt i början att greppa hur det funkade med docker, dsn osv. Efter det gick det mycket bra när det gäller själva databasen. I allmänhet
kändes det logiskt och enkelt i hur man jobbade mot databasen. Annorlunda från vad vi har gjort tidigare med SQL, men jag gillar det.

Att sedan skapa någon sorts modul som gör att man kan kommunicera med databasen genom me-sidan var mycket svårare. Fast det hade mer och göra med den asynkrona programmeringen.

### Vilken syn har du på databaser inom konceptet NoSQL?

Jag ser nu varför MongoDB är så populärt. Utan ett databasschema blir det väldigt enkelt att snabbt få upp en databas som i detta fall fungerade riktigt bra med JavaScript. Det tog inte mer än fem minuter att få igång själva databasen med ett par objekt till min me-sida.

Och fördelen med att inte ha ett "schema" som måste följas, är att t.ex. objekt inte behöver ha samma attribut. En ev mina bilar kan ha ett attribut "submodel" medans en annan inte har det. Det betyder att om en bilmodell inte har en submodell kan jag helt enkelt skippa det attributet. Det känns bättre än att behöva sätta det attibutet till t.ex. NULL som man troligtvis hade gjort i en relationsdatabas.

Dock får jag säga att jag till vis del föredrar en databas med tables då detta känns mer organiserat och strukturerat. Möjligtvis är det enklare för en "NoSQL"-databas att bli rörigt.

### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.

Jag gick in lite på det ovan - relationsdatabaser kan till vis del kännas mer organiserade. De har ett strukturerat upplägg som ger en bättre överblick över databasen. Dessutom, om vi tittar på själva namnet "relationsdatabaser", ser vi "relation". Till exempel en användare kan ha andra grejer kopplade till sig, som ordrar och fakturor som vi gjorde i oophp-kursen. Det är något som NoSQL saknar.

Vad jag förstår så är NoSQL bättre för realtids applikationer och "big data". Där "big data" förklaras som data som är för stort och komplext för att på ett bra sätt hanteras med vanliga metoder.

Och som jag nämnde tidigare har NoSQL inget schema, vilket kan vara en fördel i många lägen.

### Vilka är dina tankar om asynkron programmering med JavaScript?

Det var mycket svårt att komma igång med. Inte bara själva programmeringen utan också med eslint och node. Tydligen hade jag inte den senaste versionen av node på varken min Windows eller Linux, vilket skapade problem för mig innan jag förstod varför det inte funkade.

Samtidigt var det svårt att skapa en modul som kunde återanvändas där async och await funkade på ett bra sätt. Jag fick ta mycket hjälp av internet och hittade till slut ett sätt som funkar rätt så bra, som en modul där jag bara kan göra require där jag vill använda den.

Men till slut blev det riktigt bra. Det kändes bra med async när jag väl fick till miljön och allt.

### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?

Sen jag gick över till min Linux maskin med Docker delen har det gått väldigt bra. Helt ärligt, när vi började med Docker tyckte jag inte om det alls, det var bara krångligt och onödigt. Men just den biten som det här kursmomentet visade - att köra mongodb i en kontainer och express i en annan och ha de prata med varandra, det kändes coolt. Jag behövde inte installera MongoDB lokalt förrän mot slutet när jag testade att starta servern utanför Docker.

Dessutom, när jag sshar från min laptop till Linux maskinen kan jag enkelt starta upp servern via ssh med Docker. Då kan jag köra detach och terminalen tas inte upp av servern, så jag behöver inte ha flera terminaler kopplade via ssh. Smidigt sätt att starta upp tjänster som sen ligger och kör i bakgrunden.

## Kmom06

### Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.

Man inser verkligen vikten av det när man jobbar som vi har gjort i denna kurs. Det gör det otroligt enkelt att ladda ner och installera moduler. Utan en sån modulhantering blir det en långdragen och tråkig process varje gång man ska installera en modul.

Finns det ingen infrastruktur för moduler skulle jag gissa att antalet som faktiskt använder moduler är mycket färre än om infrastrukturen fanns. Med fler användare blir utvecklare mer motiverade till att skapa och publisha moduler, och fler kanske till och med börjar använda programmeringsspråket.

### Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?

Jag satt och funderade på detta tidigare och undrade varför just npm är den som ligger överst. Det enda jag kan tänka mig är att JavaScript är väldigt populärt just nu. Varför JavaScript är så trendigt just nu är en helt annan fråga, men så klart om språket ökar i populäritet så kommer antalet moduler också öka, då där är fler användare.

Varför npm är mer populär än andra möjliga package managers (som Bower) kan jag inte svara på då jag inte har testat något annat än npm som jag kan jämföra med. Men en gissning är att npm hanterar på moduler på ett överlägset enklaste sätt.

### Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.

Det gick mycket bra. Smärtfritt. När jag jobbade med både min chatserver-modul och databas-modul kodade jag så de skulle kunna användas som självstående moduler som man i stort sätt bara kan göra require på där man vill använda dem. Det gjorde det hela mycket enklare.

Jag valde att publisha min databasmodul. Skapade först en ny mapp (me/module) där jag gjorde npm init för att komma igång. Jag kopierade över relevanta filer (source filer, testfiler, dockerfiler och andra test- och ci-filer.) från appen, gjorde en index.js för modulen och sen var det i stort sätt klart.

Lite problem hade jag med npm version vid uppdatering av modulen. Alltid när npm försöker kommunicera med git får jag en error att git inte vet vem jag är (trots att min config är sarr och manuell gitting funkar hur bra som helst utan att ange login). Jag försökte få det att funka men till slut bestämde jag mig för att köra npm version utan att den taggar git-repot åt mig.

Jag installerade moduler i min applikation genom "npm install mongo-amj --save". Ja, jag hade lite problem med namnet på modulen. Tanken var att kalla den mongo-handler men det var redan taget (vilket npm inte säger, utan det står bara att du inte har behörighet). Så för att undvika konflikter ändrade jag namnet till mongo-amj.

Vid användning av modulen i min applikation hade jag först lite problem då jag inte riktigt hade förstått att man var tvungen att göra en index.js som exporterar modulen. När det inte funkade i min applikation förstod jag ganska snabbt att man måste kunna hämta modulen på något sätt, så det var ganska enkelt att fixa.

Nu använder jag modulen i min applikation i stort sätt på samma vis som innan, men istället för require på en fil gör jag require på modulen. Så nu är det en publiserade modulen som används och de andra databasfilerna har tagits bort.

### Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?

Det kändes mer eller mindre klart. Jag gjorde mycket av det i kmom05 så det var bara några grejer som jag behövde ändra på. Försökte att göra det så tydligt som möjligt med allt, speciellt default portar och hur man ändrar dem. Tycker också att jag har gjort det enkelt att förstår hur man starta upp servern i docker och sen koppla sig via webbläsaren. Med två docker-compose kommandon startar man upp databas och express, och sen är det igång.

Jag tror inte att jag har missat något och personligen känns readme:n komplett.

## Kmom07/10

### Applikationen

Jag fortsatte bygga på min chat app som jag började på i de tidigare kursmomenten, då jag inte kände mig klar med den. Tanken var att försöka göra en rätt så välfungerande chat app där man kan registrera sig och logga in med sin användare.

Att göra själva chatt appen kanske inte var så svårt egentligen, så mitt fokus lades på detaljer. Det gick från en app där man bara logga in med ett nickname och skicka meddelande i real-time, till en chat som kräver registrering och som laddar gamla meddelanden från databasen, med stöd för emojis, embed image, embed video, at-mention, scroll "sensor" och mer. Lade även väldigt många timmar på felhantering och testning av appen, så att det mesta ska fungera felfritt (förhoppningsvis).

Personligen tycker jag att min README är välskriven och tydlig även om där är lite mycket text på vissa ställen för reflektion. Den kan förtjäna poängen för optionella kravet 4.

https://github.com/andymartinj/chat-app

Notera att jag har använt make istället för "npm run" för många kommandon. Hoppas det är ok. Det står i README:n hur man göra allt.

### Allmänt

Det var rätt så svårt med tanke på att det var så fritt med inga direkta krav på vad eller hur mycket vi skulle göra. Jag visste att jag ville fortsätta på min chatt, men jag visste inte om det skulle vara tillräckligt. Ord som "lagom" och "välskriven" kastas runt men det betyder olika för olika personer. Jag kanske tycker att min app är grym och mer än lagom till projektet, medans rättaren tycker det motsatta. Då blir det lite svårt att veta hur man ska ta sig till väga. Dock ser jag det som positivt, för det mesta. Man lär sig av det, och jag tror det är bra att ha erfarenhet att göra något sånt här fritt när man kommer ut i "riktiga" livet.

Allmänt gick det faktiskt väldigt bra att genom projektet. Visst, jag hade många motgångar när det gällde sockets, felhantering, databas och testning men genom allt så var det kul och lärorikt. Att göra själva appen tog egentligen inte så lång tid då jag redan hade gjort en stor del tidigare i kursen. Dock spenderade jag myckte tid på att leta efter features att implementera, både det som jag kunde koda själv och det som jag kunde hämta i form av moduler.

Men, det som tog längst tid var absolut felhantering och unit tester. Dock känns unit testerna som en del av själva utvecklingen av appen, då man hela tiden anpassar koden man skriver så den ska vara testbar. Det är just den biten som tog väldigt lång tid för mig. Att se till att koden var testbar. Sedan att testa sockets och klienten var inte helt lätt. Lång tid tog det att få rätt på allt det där.

Projektet som helhet var väldigt kul och passade perfekt i kursen. Som sagt är det ganska svårt att ha ett så fritt projekt, men det är också mycket nyttigt tror jag.

### Om kursen

Helt ärligt kan jag säga att det är min eller en av mina favoritkurser på dbwebb hittills. Lite frustrerande ibland med nya tekniker som Docker, men det är också otroligt kul tillfredsställande att lära sig nya såna tekniker. Att det är så fritt kan ses som både positivt och negativt. Från mitt perspektiv är det främst positivt, då man lär sig att ta sig själv fram utan att någon håller handen åt en.

Enhetstester redan från början av utevecklingen var något jag sa att jag ville ha i föregående kursen. Jag lyckades inte alltid med testerna så som jag ville men det är verkligen stor skillnad på att göra testerna redan i början istället för i slutet av kursen. Enormt mycket bättre. Allmänt var allt om enhetstester riktigt bra i den här kursen.

Vissa av artiklarna har varit lite flummiga, eller, jag kanske bara tyckte det för att jag hade problem med Docker på Windows. Ändå, lite frustrerande när man får errors och allt möjligt när man följer artiklen perfekt. Man blir helt vilse och är tvungen att på något sätt lösa det själv, även om man inte ens har börjat lära sig om tekniken än. Jag tror något liten förbättrning kan göras när det gäller Docker. Det är en så stor del av kursen men kan vara riktigt svårt att komma igång med. Allas miljö är olika så se till att ni kan lära ut korrekt för Windows, Linux och Mac och hjälpa till om det inte funkar för någon i deras miljö.

Overall är jag mycket nöjd med kursen. Den får 9/10 av mig.
