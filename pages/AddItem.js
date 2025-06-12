class AddItem {
  constructor(page) {
    this.page = page;
    this.addCostTxt = page.locator(".add-cost-button");
    this.ItemNameTxt = page.getByRole("textbox", { name: "Item Name" });
    this.AmountTxt = page.getByRole("spinbutton", { name: "Amount" });
    this.RemarksTxt = page.getByRole("textbox", { name: "Remarks" });
    this.SubmitBtn = page.getByRole("button", { name: "Submit" });
  }

  async AddCost(costData) {
    await this.addCostTxt.click();
    await this.ItemNameTxt.fill(costData.ItemName);
    await this.AmountTxt.fill(costData.Amount);
    await this.RemarksTxt.fill(costData.Remarks);
    await this.SubmitBtn.click();
  }
}

export default AddItem;
