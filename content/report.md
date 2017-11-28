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

Text here

## Kmom06

Text here

## Kmom07/10

Text here
