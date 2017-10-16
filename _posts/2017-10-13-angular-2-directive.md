---
layout: post
title: "Angular 2 - Directive"
date: 2017-10-13
lang: en-us
---

### {{ page.title }}

#### `What is directive?`

Directives are instructions in the DOM.

#### `*ngIf`
Note: The '*' idicated thi is the structutral that change (add/remove) the DOM. `ngIf` is structural directive.

```typescript
// html
<p *ngIf="isServerCreated">Server has been created. The server name is { { serverName } }</p>

// ts
export class ServersComponent {
  isServerCreated = false;

  onCreateServer() {
    this.isServerCreated = true;
  }
}
```

#### `Enchance ngIf with else condition`
Note: The '#' is the local reference.

```typescript
// html
<p *ngIf="isServerCreated; else noServer">Server has been created. The server name is { { serverName } }</p>

<ng-template #noServer>
    <p>No server was created!</p>
</ng-template>
```

#### `Styling Elements Dynamically with ngStyle`
Note: ngStyle is attribute directive which is oppose to structural diretives. They don't add/remove elements. They only change the element they were placed on.

```typescript
// html
<h4>The server id {{ serverId }} is <span [ngStyle]="{color: getColor()}">{{ getServerStatus() }}</span></h4>

// ts
export class ServerComponent {
    serverId: number = 10;

    serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
```

#### `[ngClass]`
If a condition is true show the class else nothing.

```typescript
// html
<h4 
    [ngStyle]="{backgroundColor: getColor()}"
    [ngClass]="{online: serverStatus === 'online'}">The server id {{ serverId }} is { { getServerStatus() } }</h4>

// ts
@Component({
    selector: 'app-server', // html tag
    templateUrl: './server.component.html', // html component file
    styles: [`.online { color: white; }`]
})
```

#### `*ngFor Index`
For each current item there is a reserved index. 

```typescript
// html
<button class="btn btn-primary" (click)="onToggleDetails()">Display Details</button>
<p *ngIf="showSecret">The secret is tuna</p>

// index is a reserved keyword
<div *ngFor="let logItem of log; let i = index"
     [ngStyle]="{backgroundColor: i >= 4 ? 'blue' : 'transparent'}"
     [ngClass]="{'white-color': i >=4 }">{ { logItem } }</div>

// ts
export class DeatilsComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
```