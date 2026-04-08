import { StyleSheet, Text, View, Image, Button, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export interface LancheCardapio {
  nome: string;
  price: number;
  img: string;
}

export interface BebidaCardapio {
  nome: string;
  img: string;
  price: number;
}

export default function App() {
  const cardapio: Record<string, LancheCardapio> = {
    lanche1: {
      nome: "Hambúrguer",
      price: 10,
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg",
    },
    lanche2: {
      nome: "Pizza",
      price: 30.30,
      img: "https://as1.ftcdn.net/jpg/18/20/85/16/1000_F_1820851634_DgmrTNgcIbCtiL2Hnw59SX7ajKstMSbz.jpg"
    },
    lanche3: {
      nome: "Hot Dog",
      price: 20.20,
      img: "https://as2.ftcdn.net/jpg/15/73/99/75/1000_F_1573997594_TW7NOST4FbeObHLOgj9IvNPbGobyT1xn.jpg",
    },
  };

  const linkbebida: Record<string, BebidaCardapio> = {
    bebida1: {
      nome: "Cocaquina",
      img: "https://lacascada.com.bo/wp-content/uploads/2023/11/750.jpg",
      price: 10
    },
    bebida2: {
      nome: "Tampico",
      img: "https://tampico.com/wp-content/uploads/2022/01/citrus-hero-img-min.png",
      price: 20
    },
    bebida3: {
      nome: "Chá",
      img: "https://totalpass.com/wp-content/uploads/2025/08/cha.jpg",
      price: 25
    },
    bebida4: {
      nome: "Suco",
      price: 30,
      img: "https://static.ndmais.com.br/2024/09/suco-laranja-freepik-800x533.jpg"
    }
  };

  const [selecionado, setSelecionado] = useState('');
  const [selecionadoBebida, setSelecionadoBebida] = useState('');
  const [visivel, setVisible] = useState(false);

  const combosSelecionado = selecionado !== '' && selecionadoBebida !== '';

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.tituloSecao}>Selecione seu Lanche</Text>
        {selecionado !== '' && (
          <View style={styles.resultado}>
            <Image 
              source={{ uri: cardapio[selecionado].img }} 
              style={styles.foto} 
              resizeMode="contain"
            />
            <Text style={styles.textoPreco}>R$ {cardapio[selecionado].price.toFixed(2)}</Text>
          </View>
        )}
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selecionado}
            style={styles.pickerStyle}
            onValueChange={(itemValue) => setSelecionado(itemValue)}
          >
            <Picker.Item label="Escolha um lanche..." value="" />
            <Picker.Item label="Hambúrguer" value="lanche1" />
            <Picker.Item label="Pizza" value="lanche2" />
            <Picker.Item label="Hot Dog" value="lanche3" />
          </Picker>
        </View>

        <Text style={styles.tituloSecao}>Selecione sua Bebida</Text>
        {selecionadoBebida !== '' && (
          <View style={styles.resultado}>
            <Image 
              source={{ uri: linkbebida[selecionadoBebida].img }} 
              style={styles.foto} 
              resizeMode="contain"
            />
            <Text style={styles.textoPreco}>R$ {linkbebida[selecionadoBebida].price.toFixed(2)}</Text>
          </View>
        )}
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selecionadoBebida}
            style={styles.pickerStyle}
            onValueChange={(itemValue) => setSelecionadoBebida(itemValue)}
          >
            <Picker.Item label="Escolha uma bebida..." value="" />
            <Picker.Item label="Cocaquina" value="bebida1" />
            <Picker.Item label="Tampico" value="bebida2" />
            <Picker.Item label="Chá" value="bebida3" />
            <Picker.Item label="Suco" value="bebida4" />
          </Picker>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title='Consultar pedido' 
          disabled={!combosSelecionado}
          onPress={() => setVisible(true)}
          color="#2e7d32"
        />
      </View>

      <Modal visible={visivel} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitulo}>Resumo do Pedido</Text>
          
          <View style={styles.resumoItem}>
            <Text style={styles.resumoLabel}>Lanche:</Text>
            <Text>{selecionado ? cardapio[selecionado].nome : ""}</Text>
          </View>

          <View style={styles.resumoItem}>
            <Text style={styles.resumoLabel}>Bebida:</Text>
            <Text>{selecionadoBebida ? linkbebida[selecionadoBebida].nome : ""}</Text>
          </View>

          <View style={styles.totalBox}>
            <Text style={styles.totalTexto}>Total:</Text>
            <Text style={styles.totalValor}>
               R$ {( (selecionado ? cardapio[selecionado].price : 0) + (selecionadoBebida ? linkbebida[selecionadoBebida].price : 0) ).toFixed(2)}
            </Text>
          </View>

          <Button title='Fechar e Editar' onPress={() => setVisible(false)} color="#d32f2f"/>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { 
    alignItems: 'center', 
    paddingTop: 40, 
    paddingBottom: 120 
  },
  tituloSecao: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#555' },
  resultado: { 
    alignItems: 'center', 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#eee', 
    borderRadius: 12, 
    padding: 10, 
    width: '85%',
    backgroundColor: '#fafafa'
  },
  foto: { 
    width: '100%', 
    height: 120, 
    borderRadius: 8,
  },
  textoPreco: { fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#2e7d32' },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 30,
    overflow: 'hidden'
  },
  pickerStyle: { width: 280, height: 50 },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 5,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  resumoItem: { flexDirection: 'row', marginBottom: 10 },
  resumoLabel: { fontWeight: 'bold', marginRight: 10 },
  totalBox: { marginTop: 30, marginBottom: 30, alignItems: 'center' },
  totalTexto: { fontSize: 18, color: '#666' },
  totalValor: { fontSize: 32, fontWeight: 'bold', color: '#2e7d32' }
});