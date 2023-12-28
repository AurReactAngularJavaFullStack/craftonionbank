# Craftonionbank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

---

### **Arborescence du projet**:

**Architecture Clean/Onion **:
**core** :
  **domain**
  **usecases**
**infrastructure** :
  **persistence**
  **network**
  **security**

**application**
  **services**
 **dto**

**presentation** :
  **components**
  **pages**
  **viewmodels**

---

### Architecture Clean/Onion :

1. **core** : Cœur logique métier de l'application.
   - **domain** : Définitions des entités, objets de valeur et règles métier. Cette couche encapsule la logique métier fondamentale et les politiques de l'entreprise.
   - **usecases** : Cas d'utilisation représentant des opérations métier spécifiques. Les use cases orchestrent le flux des données vers et à partir des entités du domaine, appliquant les règles métier.
2. **infrastructure** : Aspects techniques tels que la persistance des données, la communication réseau, etc.
   - **persistence** : Gestion des données, incluant les repositories et les objets d'accès aux données. Cette couche est responsable de la communication avec les bases de données ou d'autres formes de stockage persistant.
   - **network** : Services pour les appels API et la communication externe. Gère les interactions avec les systèmes et services externes via le réseau.
   - **security** : Mécanismes de sécurité, authentification et autorisation. Fournit des stratégies pour sécuriser l'application, gérer les sessions des utilisateurs, et valider les accès.
3. **application** : Coordination entre la couche métier et les interfaces utilisateurs.
   - **services** : Services d'application, orchestration des cas d'utilisation. Implémente la logique d'application qui n'est pas purement métier, comme le workflow ou la logique transactionnelle.
   - **dto** : Objets de Transfert de Données pour les échanges entre les couches. Utilisés pour transférer des données entre les couches sans exposer les entités du domaine.
4. **presentation** : La couche d'interface utilisateur.
   - **components** : Composants Angular pour l'interface utilisateur. Ces composants sont réutilisables et forment les éléments de base de l'UI.
   - **pages** : Pages ou vues spécifiques de l'application. Chaque page peut intégrer un ou plusieurs composants et est généralement liée à une route spécifique.
   - **viewmodels** : Modèles de vue pour la liaison de données. Ils agissent comme des intermédiaires entre les composants et la logique métier, préparant les données pour l'affichage.

---

To reorganize your step definitions (`*.steps.ts` files) according to the Clean/Onion and Hexagonal architectures, you should place them in a way that reflects the different testing scopes and layers they're interacting with. Here's a proposed reorganization:

### Clean/Onion Architecture:

1. **Domain Layer**:

   - No direct Cucumber steps should be written for the domain layer, as this layer is usually tested with unit tests, not end-to-end Cucumber tests.
2. **Application Layer**:

   - `gestionDeCompte.steps.ts`: These steps orchestrate high-level operations such as depositing and withdrawing, which involve application services.
   - `virementEntreComptes.steps.ts`: This involves application-level operations between accounts.
3. **Infrastructure Layer**:

   - Typically, you wouldn't write Cucumber steps at this layer either, as these are infrastructure concerns that would be mocked or stubbed out in high-level tests.
4. **Presentation Layer**:

   - `consultationDeSolde.steps.ts`: These steps are more about the interaction with the UI and should therefore focus on the presentation layer where balance inquiry operations are initiated.

     For each of these `.steps.ts` files, the content should reflect the layer they belong to. For example:

     - **Application Layer Steps (`gestionDeCompte.steps.ts`)**: These should invoke methods on application services that handle the deposit and withdrawal use cases.
     - **Presentation Layer Steps (`consultationDeSolde.steps.ts`)**: These might simulate UI actions, like clicking a button to view balance, and then checking the displayed value.
     - **Adapters Layer Steps (`securiteEtAuthentification.steps.ts`)**: These would test the interaction with your authentication system, perhaps through a mocked service.

     By following this structure, you maintain a clear separation of concerns in your tests, just as you do in your application code. This also makes it easier to manage and maintain your test suites as your application grows and evolves.

---

### Infrastructure Layer Steps

Typically, you would not write Cucumber steps directly against the infrastructure layer. These steps would be testing the integration points between your application services and the outside world (like databases, external services, etc.), which are usually mocked or stubbed in high-level tests like those written with Cucumber.

### Presentation Layer Steps

For the presentation layer, the Cucumber steps would be testing the UI interactions, and these would often be written using a tool like Protractor or Cypress that can interact with the web page.

However, since Cucumber is more commonly used for integration or end-to-end testing, which involves interaction with the UI, this might be less relevant unless you're simulating UI actions in a headless browser or using Cucumber with a tool like Selenium.

Remember that Cucumber steps should be written in a way that they describe the behavior from the user's perspective and not the implementation details. This ensures that your tests remain relevant even if the underlying implementation changes.

The restructuring above aligns your test definitions with the architectural principles of the Clean/Onion and Hexagonal architectures, maintaining a clear separation of concerns and making your test suite easier to manage.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
