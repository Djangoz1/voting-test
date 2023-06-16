# Test Voting 

$ Remarque $
Les tests ont été effectué avant que je rattrape les cours sur la semaine de tests. Je me rend compte qu'il y a pas mal de recommendation que je n'ai pas respecter :

- Le ``new Contract``à la place de ``contract.deploy``.
- Ne pas multiplier les expect dans un it



----

Les tests sont effectués par ordre chronologique(en fonction du Workflow status). 

## Initialisation 

On commence par vérifier si les fonctions répondent bien comme elle le devrait, notamment dans le changement de Workflow. Et également on vérifie si il le winner est bien égale à 0, c'est-à-dire qu'il n'existe pas encore.

## Registering Voters

Ensuite, on peux passer à la période d'enregistrement des address(à la whitelist). 
On commence par un beforeEach pour ajouter l'owner à la whitelist, afin de faciliter les tests puisque certaines fonctions ne sont accessibles que par onlyVoters.

Ici on test si l'owner est bien capable d'ajouter des voters, si il est possible de les récupérer et si il est bien impossible de les enregistrer lorsque la session d'enregistrement est terminé. Également on s'assure que seul les voters puissent effectuer un getVoter()

## Proposals Registration Started

Une fois l'enregistrement de voter testé, on peux ajouter les voters dans un before each et ce concentrer sur l'enregistrement des proposals. 

Ici on va s'assurer que l'enregistrement des proposals s'effectue bien lorsque le workflow status le permet. On regarde si l'enregistrement de la proposal genesis est bien présent et qu'elle soit la seul lorsque la session d'enregistrement de proposals s'ouvre. Ensuite on test si l'enregistrement d'autres proposals s'effectue correctement et si l'accès à cet enregistrement est bien contrôlé. 

## Proposals Registration Ended

Lorsque l'enregistrement est terminé, on s'assure qu'il y a bien le nombre exact de proposals et que la période d'enregistrement est bien terminé.


## Voting Session Started

Encore une fois on s'assure que seuls ceux qui sont listé puissent participé au vote. 
Évidemment, on vérifie que les votes sont correctement enregistré et que le double vote est bien impossible. 


## Voting Session Ended

Lorsque les votes sont effectués, on doit s'assurer que le nombre de voix pour chaque vote correspond bien à ce qui a été exécuté. Également, on s'assure que plus aucun vote n'est possible une fois que la session de vote est close. On regarde aussi si le winner est toujours indéfini car le décompte des voix n'as toujours pas eu lieu. 


## Tally Votes

Pour finir on regarde si le changement de status a bien entrainé le décompte des voix et l'initialisation du winnerID. De même, on regarde si toutes les address (mêmes les non voters) puissent connaître le gagnant, comme il l'a été demander. 



