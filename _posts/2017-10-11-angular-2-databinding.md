---
layout: post
title: "Angular 2 - Data Binding"
date: 2017-10-11
lang: en-us
---

### {{ page.title }}

#### `Interpolation`

```typescript
// html
The server id { { serverId } } is { { getServerStatus() } }

// server.component.ts
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    getServerStatus(): string {
        return this.serverStatus;
    }
}
```

#### `Property Binding`

To do `prperty binding`, you use `[property]`.

```typescript
// html
// the button will change from disabled to enable in 3 seconds
<button class="btn btn-primary" [disabled]="!allowNewServer"></button>

// server.component.ts
export class ServerComponenet {
    allowNewServer = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 3000);
    }
}
```

#### `Event Binding`

To do `event binding`, you use `(event)`.

```typescript
// html
// click is javascript event handler just without the on (onClick)
<button class="btn btn-primary" (click)="onCreateServer()"></button>
<p>{ { serverCreationStatus } }</p>

// ts
export class ServersComponenet {
    serverCreationStatus = "Server is not created!";

    onCreateServer() {
        return this.serverCreationStatus = "Server has been created!";
    }
}
```

#### `Passing and Using Data with Event Binding`

```typescript
// html
<label>Server Name</label>
<input type="text" class="form-control" (input)="onUpdateServerName($event)"> // $event is the reserved event obj
<p>{ { serverName } }</p>

// ts
export class serversComponent {
    serverName = "";

    onUpdateServerName(event) {
        // you can be explict casting. E.g: (<HTMLInputElement>event.target).value
        return this.serverName = event.target.value;
    }
}
```

#### `Two-Way Binding`

Important: To be able to use `ngModel`, the `FormsModule` (from @angular/forms) needs to be added to your import[] array in the `AppModule` (should be there by default in a CLI project)

For two-way binding, you use `[(ngModel)]`.

```typescript
// html
<label>Server Name</label>
<input type="text" class="form-control" [(ngModel)]="serverName">
<p>{ { serverName } }</p>

// ts
export class serversComponent {
    serverName = "test server";
}
```
