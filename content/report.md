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

Text here

## Kmom04

Text here

## Kmom05

Text here

## Kmom06

Text here

## Kmom07/10

Text here
