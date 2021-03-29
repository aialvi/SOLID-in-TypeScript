// The Liskov Substitution Principle (LSP) : Child classes should never break the parent class’ type definitions.

abstract class CountryCode {
  Address: string;
  Country: string;
  CountryCode: string;

  /*
   * @returns formatted country code
   */
  abstract writeCountryCode(): string;
}

class IndiaCountryCode extends CountryCode {
  writeCountryCode(): string {
    return "Formatted Country Code India" + this.CountryCode;
  }
}
class BangladeshCountryCode extends CountryCode {
  writeCountryCode(): string {
    return "Formatted Country Code Bangladesh" + this.CountryCode;
  }
}
class AustraliaCountryCode extends CountryCode {
  writeCountryCode(): string {
    return "Formatted Country Code Australia" + this.CountryCode;
  }
}

class CountryCodeWriter {
  PrintCountryCode(writer: CountryCode): string {
    return writer.writeCountryCode();
  }
}
