import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { TestBed } from "@angular/core/testing";
import { MatInputHarness } from "@angular/material/input/testing";

import { FooComponent } from "./foo.component";

describe("FooComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FooComponent],
		}).compileComponents();
	});

	it("should render title", async () => {
		const fixture = TestBed.createComponent(FooComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector("h1")?.textContent).toContain("Welcome to foo!");
	});

	it("should focus input", async () => {
		const fixture = TestBed.createComponent(FooComponent);
		const loader = TestbedHarnessEnvironment.loader(fixture);
		fixture.detectChanges();
		const fieldHarness = await loader.getHarness(MatInputHarness.with({ selector: `[name="foo"]` }));
		await fieldHarness.focus();
		expect(await fieldHarness.isFocused()).toBe(true);
	});
});
