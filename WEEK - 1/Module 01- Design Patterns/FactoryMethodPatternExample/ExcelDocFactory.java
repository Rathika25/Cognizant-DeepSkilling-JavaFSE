public class ExcelDocFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new ExcelDoc();
    }
}