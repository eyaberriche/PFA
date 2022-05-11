import { ConfigProvider, DatePicker, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

function ModalService({ initial, form, finish, Obj, changeev, changeev2 }) {
  const { RangePicker } = DatePicker;
  return (
    <Form
      initialValues={initial}
      onFinish={finish}
      form={form}
      name='control-hooks'
      layout='vertical'
    >
      <Form.Item
        name='name'
        label='Nom du service'
        style={{ color: "#fff" }}
        rules={[
          {
            required: true,
            message: "nom  du service manquant",
          },
        ]}
      >
        <Input
          name='name'
          className='input form-control'
          value={Obj.name}
          onChange={changeev}
        />
      </Form.Item>

      <Form.Item
        name='price'
        label='Prix en $'
        rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Il faut qu'un nombre",
          },

          { required: true, message: "Prix manquant" },
        ]}
        validateTrigger='onBlur'
      >
        <Input
          name='price'
          className='input form-control'
          value={Obj.price}
          onChange={changeev}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "description manquante",
          },
        ]}
        name='description'
        label='Description du service'
      >
        <TextArea
          onChange={changeev}
          value={Obj.description}
          name='description'
          rows={4}
          placeholder='description du service'
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "période manquante",
          },
        ]}
        name='period'
        label='Période'
      >
        <RangePicker onChange={changeev2} />
      </Form.Item>
    </Form>
  );
}

export default ModalService;
