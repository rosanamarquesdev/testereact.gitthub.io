import { Button } from "../../../components/Forms/Button";
import { Card } from "../../../components/Forms/Card";
import { Form } from "../../../components/Forms/Form";
import { FormsField } from "../../../components/Forms/FormsField";
import { FileInput } from "../../../components/Forms/Inputs/File";
import { Input } from "../../../components/Forms/Inputs/Input";

export const RegisterProduct = () => {
  return (
    <>
      <Form title="Cadastrar Produto">
        <Card>
          <FormsField variant="file">
            <FileInput
              id={"fotoProduto"}
              variant="product"
              text="Foto do Produto"
              smileSize={55}
            />
          </FormsField>

          <FormsField variant="double">
            <Input height="4.8rem">Nome do produto</Input>
            <Input
              type="select"
              height="4.8rem"
              options={[
                { value: "1", label: "Selecione" },
                { value: "2", label: "12345" },
                { value: "3", label: "67890" },
              ]}
            >
              Código Interno
            </Input>
          </FormsField>

          <Input height="4.8rem">Código de barras</Input>

          <Input height="4.8rem">Fornecedor</Input>

          <FormsField variant="double">
            <Input height="4.8rem">Grupo de produto</Input>
            <Input height="4.8rem">Movimenta estoque?</Input>
          </FormsField>

          <Input height="4.8rem">Quantidade</Input>

          <FormsField variant="double">
            <Input height="4.8rem">Peso</Input>
            <Input height="4.8rem">Largura</Input>
          </FormsField>

          <FormsField variant="double">
            <Input height="4.8rem">Altura</Input>
            <Input height="4.8rem">Complemento</Input>
          </FormsField>

          <FormsField variant="double">
            <Input height="4.8rem">NCM</Input>
            <Input height="4.8rem">CEST</Input>
          </FormsField>

          <FormsField variant="double">
            <Input height="4.8rem">Cód benefício</Input>
            <Input height="4.8rem">Origem</Input>
          </FormsField>

          <FormsField variant="double">
            <Input height="4.8rem">Número FCI</Input>
            <Input height="4.8rem">Produto específico</Input>
          </FormsField>

          <Input height="15rem">Quantidade</Input>

          <Button type="submit" height="4.8rem">
            Cadastrar
          </Button>
        </Card>
      </Form>
    </>
  );
};
