Chat Application
============================

Jag har bestämt mig för att göra en chatt applikation i kursen där flera personer
ska kunna registrera sig, logga in och chatta med varandra genom en webbsida.

Chatt sker genom websockets (socket.io) som var implementerat redan i kmom02. Tester
på min chatt-modul finns nu tillgängliga.

Jag har skapat en databasmodul som för tillfället används för att spara alla
meddelande användarna skickar. När man loggar in kan man nu även se gamla meddelanden.
Tid kommer att visas tillsammans med meddelande.

Databas kommer troligen användas för användare i framtiden.

Koden finns på [GitHub](https://github.com/andymartinj/chat-app).

Databasmodulen, som ansluter och kommunicerar med mongodb, är nu en npm modul som kan hittas här: [mongo-amj](https://www.npmjs.com/package/mongo-amj) och på [GitHub](https://github.com/andymartinj/mongo-handler)
