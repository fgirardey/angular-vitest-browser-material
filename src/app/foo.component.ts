import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
	selector: "app-foo",
	template: `
		<h1>Welcome to foo!</h1>
		<mat-form-field>
			<mat-label>Input</mat-label>
			<input name="foo" matInput />
		</mat-form-field>
	`,
	imports: [MatFormFieldModule, MatInputModule],
})
export class FooComponent {}
